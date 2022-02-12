import { useState } from 'react';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import importedCartItems from '../mock-data/cartItems';

const OrdersAll = () => {
  const [cartItems, setCartItems] = useState(importedCartItems);
  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };
  return (
    <div>
      <h3>All Orders</h3>
      <div className="gray-background rounded p-1 my-2">
        {cartItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            priceForItem={item.variantOptions.length > 1
              ? item.quantity * item.price : item.quantity * item.variantOptions[0].price}
            shippingPrice={getShippingPrice(item.quantity * item.shippingWeight, item.currency)}
            totalPrice={item.totalPrice}
            onRemove={() => { handleRemove(item.id); }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrdersAll;
