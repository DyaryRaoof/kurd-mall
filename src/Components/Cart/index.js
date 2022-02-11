import { useState } from 'react';
import CartItem from './CartItem';
import cartItemsImported from '../mock-data/cartItems';
import MateriaIcon from '../Shared/MateriaIcon';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import getUserLocation from '../Shared/methods/getUserLocation';
import openMapAtPosition from '../Shared/methods/openMapAtPostion';

const Cart = () => {
    const [cartItems, setCartItems] = useState(cartItemsImported);

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
            <ul className='gray-background rounded'>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onRemove={handleRemove}
                    />
                ))}
            </ul>

        </main>
    );
};

export default Cart;
