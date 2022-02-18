import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import importedCartItems from '../mock-data/cartItems';
import Pagination from '../Shared/Pagination';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const OrdersAll = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(importedCartItems);
  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };
  return (
    <div>
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
            onRemove={() => { handleRemove(item.id); }}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <RoundOrangeIconButton buttonText={t('myOrders')} onPressed={() => { navigate('/driver-orders'); }} iconName="local_shipping" />
      </div>
      <Pagination onPageChange={() => { }} currentPage={0} totalPages={10} />

    </div>
  );
};

export default OrdersAll;
