import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavStoreOrItem } from '../../redux/design/design';
import './Header.css';
import MaterialIcon from '../Shared/MateriaIcon';
import Search from './Search';
import Sidebar from './Sidebar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const changeShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div>
      <nav className="mt-3">
        <ul className="d-flex upper-nav-ul align-items-center">
          <li className="width-100"><button type="button" className="icon-button" onClick={() => { navigate('/'); }}>KurdMall</button></li>
          <li className="w-100 mx-auto d-sm-block d-none"><Search /></li>

          <li className="ms-auto">
            <button className="icon-text-pair icon-button" type="button" onClick={() => { navigate('/log-in'); }}>
              <span className="d-flex justify-content-end width-100">{t('logIn')}</span>
              <div>
                <MaterialIcon onClick={() => { }} orange text="person" />
              </div>
            </button>
          </li>
          <li>
            <button className="icon-text-pair me-2 icon-button" type="button" onClick={() => { navigate('/profile'); }}>
              <span>
                <MaterialIcon onClick={() => { }} orange text="manage_accounts" />
              </span>
              {' '}
              <span>{t('profile')}</span>
            </button>
          </li>
          <li>
            <button className="icon-text-pair me-2 icon-button" type="button" onClick={() => { navigate('/cart'); }}>
              <span>
                <MaterialIcon onClick={() => { }} orange text="shopping_cart" />
              </span>
              {' '}
              <span>{t('cart')}</span>
            </button>
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
            <span className="me-2">{t('items')}</span>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={(e) => { dispatch(setNavStoreOrItem(e.target.checked ? 'stores' : 'items')); }} />
            </div>
            {' '}
            {t('stores')}
          </li>
        </ul>
      </nav>
      <hr className="nav-hr" />
      <nav>
        <ul className="d-flex justify-content-center list-style-none">
          <li className="px-1"><button className="icon-button orange" type="button"><u>{t('yourCollection')}</u></button></li>
          <li className="px-1"><button className="icon-button orange" type="button" onClick={() => { navigate('/create-store'); }}><u>{t('createStore')}</u></button></li>
          <li className="px-1"><button className="icon-button orange" type="button" onClick={() => { navigate('/create-item'); }}><u>{t('addItemToStore')}</u></button></li>
        </ul>
      </nav>
      <hr className="nav-hr" />
      <Sidebar clicked={showSidebar} changeShowSidebar={changeShowSidebar} />
    </div>

  );
};

export default Header;
