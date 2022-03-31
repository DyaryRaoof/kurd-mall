import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import Paginator from '../Shared/Paginator';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import getAllOrders from '../../api/allOrders';
import postOrderPickedUp from '../../api/postOrderPickedUp';

const OrdersAll = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const orders = useSelector((state) => state.allOrdersReducer.orders) || [];
  const [cartItems, setCartItems] = useState(orders);
  const handleRemove = async (id) => {
    const reponse = await postOrderPickedUp(dispatch, id);
    if (reponse.status === 200) {
      const newCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(newCartItems);
    }
  };
  useEffect(() => {
    getAllOrders(dispatch, 1);
  }, []);

  useEffect(() => {
    setCartItems(orders);
  }, [orders]);

  useEffect(() => {
    getAllOrders(dispatch, currentPage);
  }, [currentPage]);

  const priceForItem = (item) => {
    if (item.variantOptions) {
      if (item.variantOptions.length > 1) {
        return item.quantity * item.variantOptions[0].price;
      }
      return item.quantity * item.price;
    }
    return item.quantity * item.price;
  };

  return (
    <div>
      <h3>{t('allOrders')}</h3>
      <div className="gray-background rounded p-1 my-2">
        {cartItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            priceForItem={priceForItem(item)}
            shippingPrice={getShippingPrice(item.quantity * item.shipping_kg, item.currency)}
            totalPrice={item.total_price}
            onRemove={() => { handleRemove(item.id); }}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center my-5">
        <RoundOrangeIconButton buttonText={t('myOrders')} onPressed={() => { navigate('/driver-orders'); }} iconName="local_shipping" />
      </div>
      <Paginator
        onChange={(page) => setCurrentPage(page)}
        wasLastpage={cartItems.length === 0 && currentPage !== 1}
      />
    </div>
  );
};

export default OrdersAll;
