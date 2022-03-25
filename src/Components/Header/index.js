import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavStoreOrItem } from '../../redux/design/design';
import './Header.css';
import MaterialIcon from '../Shared/MateriaIcon';
import Search from './Search';
import Sidebar from './Sidebar';
import { setUser } from '../../redux/user/user';
import { signOutUser } from '../../api/user';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const changeShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = async () => {
    const response = await signOutUser();
    if (response.status !== 200) {
      return;
    }

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(setUser(null));
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" className="icon-button" onClick={() => { navigate('/'); }}>KurdMall</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <li className="w-100 mx-auto d-sm-block d-none"><Search /></li>

            <ul className="navbar-nav">

              <li className="ms-auto">
                <button className="icon-text-pair icon-button" type="button" onClick={user ? handleLogout : () => { navigate('/log-in'); }}>
                  <span className="d-flex justify-content-end width-100">{user ? t('logOut') : t('logIn')}</span>
                  <div>
                    <MaterialIcon onClick={() => { }} orange text="person" />
                  </div>
                </button>
              </li>
              {user ? (
                <>
                  <li className="ms-auto">
                    <button className="icon-text-pair me-2 icon-button" type="button" onClick={() => { navigate('/profile'); }}>
                      <span>
                        <MaterialIcon onClick={() => { }} orange text="manage_accounts" />
                      </span>
                      {' '}
                      <span>{t('profile')}</span>
                    </button>
                  </li>
                  <li className="ms-auto">
                    <button className="icon-text-pair me-2 icon-button" type="button" onClick={() => { navigate('/cart'); }}>
                      <span>
                        <MaterialIcon onClick={() => { }} orange text="shopping_cart" />
                      </span>
                      {' '}
                      <span>{t('cart')}</span>
                    </button>
                  </li>

                  <li className="ms-auto">
                    <button className="icon-text-pair me-2 icon-button" type="button" onClick={() => { navigate('/orders-all'); }}>
                      <span>
                        <MaterialIcon onClick={() => { }} orange text="local_shipping" />
                      </span>
                      {' '}
                      <span>{t('myOrders')}</span>
                    </button>
                  </li>

                  <li className="ms-auto me-2">
                    <button type="button" className="position-relative icon-button" onClick={() => { navigate('/chat-list'); }}>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill orange-bg">
                        99+
                        <span className="visually-hidden">unread messages</span>
                      </span>
                      <span>
                        <MaterialIcon onClick={() => { }} orange text="chat_bubble_outline" />
                      </span>
                    </button>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
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
          <li className="px-1"><button className="icon-button orange" type="button" onClick={() => { navigate('/my-collection'); }}><u>{t('yourCollection')}</u></button></li>
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
