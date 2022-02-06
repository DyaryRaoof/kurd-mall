import './Header.css';
import { useState } from 'react';
import MaterialIcon from '../Shared/MateriaIcon';
import Search from './Search';
import Sidebar from './Sidebar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const changeShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <nav className="mt-3">
        <ul className="d-flex upper-nav-ul align-items-center">
          <li className="width-100">Kurd Mall</li>
          <li className="w-100 mx-auto d-sm-block d-none"><Search /></li>
          <li className="ms-auto">
            <div className="icon-text-pair" tabIndex={0} role="button" onClick={() => { }} onKeyDown={() => { }}>
              <span className="d-flex justify-content-end width-100">Sign In</span>
              <div>
                <MaterialIcon onClick={() => { }} orange text="person" />
              </div>
            </div>
          </li>
          <li>
            <div className="icon-text-pair me-2">
              <span>
                <MaterialIcon onClick={() => { }} orange text="shopping_cart" />
              </span>
              {' '}
              <span>Cart</span>
            </div>
          </li>
        </ul>
      </nav>
      <hr className="nav-hr" />
      <nav>
        <ul className="lower-nav-ul d-flex align-items-center">
          <li>
            <button
              className="icon-button"
              type="button"
              onClick={() => {
                changeShowSidebar();
              }}
            >
              <MaterialIcon orange text="menu" />
            </button>

          </li>
          <li className="d-block d-sm-none mx-auto"><Search /></li>
          <li className="d-flex ms-auto me-2">
            <span className="me-2">Items</span>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
            </div>
            {' '}
            Shops
          </li>
        </ul>
      </nav>
      <hr className="nav-hr" />
      <nav>
        <ul className="d-flex justify-content-center list-style-none">
          <li className="px-1"><button className="icon-button orange" type="button"><u>Your Collection</u></button></li>
          <li className="px-1"><button className="icon-button orange" type="button"><u>Create Store</u></button></li>
          <li className="px-1"><button className="icon-button orange" type="button"><u>Add Item To Store</u></button></li>
        </ul>
      </nav>
      <hr className="nav-hr" />
      <Sidebar clicked={showSidebar} changeShowSidebar={changeShowSidebar} />
    </div>

  );
};

export default Header;
