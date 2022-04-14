import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import getDriverOrders from '../../api/dirverOrders';
import postOrderDelivered from '../../api/postOrderDelivered';

const DriverOrders = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.driverOrdersReducer.orders) || [];

  const [cartItems, setCartItems] = useState(orders);

  const onPickUpChanged = async (id) => {
    let newCartItems = [...cartItems];
    const item = newCartItems.filter((item) => item.id === id)[0];
    if (!item.is_picked_up) {
      item.is_picked_up = !item.is_picked_up;
    } else {
      const response = await postOrderDelivered(dispatch, id);
      if (response.status === 200) {
        item.is_delivered = !item.is_delivered;
        newCartItems = newCartItems.filter((item) => item.id !== id);
      }
    }
    setCartItems(newCartItems);
  };

  const priceForItem = (item) => {
    if (item.variantOptions) {
      if (item.variantOptions.length > 1) {
        return item.quantity * item.variantOptions[0].price;
      }
      return item.quantity * item.price;
    }
    return item.quantity * item.price;
  };

  useEffect(() => {
    getDriverOrders(dispatch, 1);
  }, []);

  useEffect(() => {
    setCartItems(orders);
  }, [orders]);

  return (
    <main className="container">
      <h3>{t('allOrders')}</h3>
      <div className="gray-background rounded p-1 my-2">
        {cartItems.length > 0 ? cartItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            priceForItem={priceForItem(item)}
            shippingPrice={getShippingPrice(item.quantity * item.shipping_kg, item.currency)}
            totalPrice={item.total_price}
            onPickUpChanged={(id) => { onPickUpChanged(id); }}
          />
        ))
          : <p className="text-center">{t('noDriverOrders')}</p>}
      </div>
    </main>
  );
};

export default DriverOrders;
