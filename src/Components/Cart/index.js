import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import cartItemsImported from '../mock-data/cartItems';
import MateriaIcon from '../Shared/MateriaIcon';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import getUserLocation from '../Shared/methods/getUserLocation';
import openMapAtPosition from '../Shared/methods/openMapAtPostion';
import getShippingPrice from '../Shared/methods/getShippingPrice';

const Cart = () => {
  const [cartItems, setCartItems] = useState(cartItemsImported);

  const setTotals = (quantity, index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    newCartItems[index].totalPrice = quantity * newCartItems[index].price
      + getShippingPrice(quantity
        * newCartItems[index].shippingWeight, newCartItems[index].currency);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    cartItems.forEach((_, index) => {
      setTotals(1, index);
    });
  }, []);

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  let postion = getUserLocation();

  return (
    <main className="container">
      <h2 className="orange">Cart</h2>
      <div id="map" />
      <div className="gray-background rounded p-2 ">
        <button className="icon-button" type="button" onClick={() => { openMapAtPosition(postion); }}>
          <div className="fw-bold">Send to this location</div>
          <div className="d-flex justify-content-center"><MateriaIcon text="place" orange isLarge /></div>
        </button>
        <div className="d-flex justify-content-end">
          <RoundOrangeIconButton
            buttonText="Update My Location"
            width="170px"
            padding="5px"
            isIconPresent={false}
            onPressed={() => { postion = getUserLocation(); }}
          />
        </div>
      </div>
      <ul className="gray-background rounded p-1 my-2">
        {cartItems.map((item, index) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            priceForItem={item.variantOptions.length > 1
              ? item.quantity * item.price : item.quantity * item.variantOptions[0].price}
            shippingPrice={getShippingPrice(item.quantity * item.shippingWeight, item.currency)}
            setParentQuantity={(quantity) => { setTotals(quantity, index); }}
            totalPrice={item.totalPrice}

          />
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <div>
          <div>
            Overall Total:
            {' '}
            {cartItems.filter((item) => item.currency === 'IQD').reduce((acc, item) => acc + item.totalPrice, 0)}
            {' '}
            IQD
            +
            {cartItems.filter((item) => item.currency === 'USD').reduce((acc, item) => acc + item.totalPrice, 0)}
            {' '}
            USD
          </div>
        </div>
        <div>
          <RoundOrangeIconButton
            buttonText="Checkout"
            width="170px"
            padding="5px"
            isIconPresent={false}
          />
        </div>
      </div>
    </main>
  );
};

export default Cart;
