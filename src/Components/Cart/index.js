import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
// import cartItemsImported from '../mock-data/cartItems';
import MateriaIcon from '../Shared/MateriaIcon';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import getUserLocation from '../Shared/methods/getUserLocation';
import openMapAtPosition from '../Shared/methods/openMapAtPostion';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import getCartItems from '../../api/getCartItems';
import postBuyItems from '../../api/buyItems';

const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentCartItems = useSelector((state) => state.getCartItemsReducer.items);
  const [cartItems, setCartItems] = useState(currentCartItems || []);
  const dispatch = useDispatch();

  const setTotals = (quantity, index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    newCartItems[index].totalPrice = quantity * newCartItems[index].price
      + getShippingPrice(quantity
        * newCartItems[index].shippingWeight, newCartItems[index].currency);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    dispatch(getCartItems);
    cartItems.forEach((_, index) => {
      setTotals(1, index);
    });
  }, []);

  useEffect(() => {

  }, [currentCartItems]);

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  let postion = getUserLocation();

  const priceForItem = (item) => {
    if (item.variantOptions) {
      if (item.variantOptions.length > 1) {
        return item.quantity * item.variantOptions[0].price;
      }
      return item.quantity * item.price;
    }
    return item.quantity * item.price;
  };

  const handleCheckout = () => {
    postBuyItems(dispatch, cartItems.map((item) => item.id));
    navigate('/owner-orders');
  };
  return (
    <main className="container">
      <h2 className="orange">{t('cart')}</h2>
      <div id="map" />
      <div className="gray-background rounded p-2 ">
        <button className="icon-button" type="button" onClick={() => { openMapAtPosition(postion); }}>
          <div className="fw-bold">{t('sendToThisLocation')}</div>
          <div className="d-flex justify-content-center"><MateriaIcon text="place" orange isLarge /></div>
        </button>
        <div className="d-flex justify-content-end">
          <RoundOrangeIconButton
            buttonText={t('updateMyLocation')}
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
            onRemove={() => { handleRemove(item.id); }}
            priceForItem={priceForItem(item)}
            shippingPrice={getShippingPrice(item.quantity * item.shippingWeight, item.currency)}
            setParentQuantity={(quantity) => { setTotals(quantity, index); }}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <div>
          <div>
            {t('overAllTotal')}
            :
            {' '}
            {cartItems.filter((item) => item.currency === 'IQD').reduce((acc, item) => acc + item.totalPrice, 0)}
            {' '}
            {t('iqd')}
            +
            {cartItems.filter((item) => item.currency === 'USD').reduce((acc, item) => acc + item.totalPrice, 0)}
            {' '}
            {t('usd')}
          </div>
        </div>
        <div>
          <RoundOrangeIconButton
            buttonText={cartItems.length > 0 ? t('checkout') : t('myOrders')}
            width="170px"
            padding="5px"
            isIconPresent={false}
            onPressed={() => { handleCheckout(); }}
          />
        </div>
      </div>
    </main>
  );
};

export default Cart;
