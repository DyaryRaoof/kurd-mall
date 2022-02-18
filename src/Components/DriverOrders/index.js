import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import importedCartItems from '../mock-data/cartItems';

const DriverOrders = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState(importedCartItems);
  const onPickUpChanged = (id) => {
    let newCartItems = [...cartItems];
    const item = newCartItems.filter((item) => item.id === id)[0];
    if (!item.pickedUp) {
      item.pickedUp = !item.pickedUp;
    } else {
      item.delivered = !item.delivered;
      newCartItems = newCartItems.filter((item) => item.id !== id);
    }
    setCartItems(newCartItems);
  };

  return (
    <main className="container">
      <h3>{t('allOrders')}</h3>
      <div className="gray-background rounded p-1 my-2">
        {cartItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            priceForItem={item.variantOptions.length > 1
              ? item.quantity * item.price : item.quantity * item.variantOptions[0].price}
            shippingPrice={getShippingPrice(item.quantity * item.shippingWeight, item.currency)}
            totalPrice={item.totalPrice}
            onPickUpChanged={(id) => { onPickUpChanged(id); }}
          />
        ))}
      </div>
    </main>
  );
};

export default DriverOrders;
