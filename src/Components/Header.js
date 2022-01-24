import './Header.css';
import account from '../images/icons/account_orange_icon.png';
import cart from '../images/icons/shopping_cart_orange_icon.png';
import hamburger from '../images/icons/hamburger_orange_icon.png';

const Header = () => (
  <div>
    <nav>
      <ul>
        <li>Kurd Mall</li>
        <li>
          Sign in
          <img src={account} alt="Main menu icon" />
        </li>
        <li>
          <img src={cart} alt="Main menu icon" />
          {' '}
          Cart
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <img src={hamburger} alt="Main menu icon" />
        </li>
        <li>
          Items
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <label htmlFor="flexSwitchCheckChecked">ss</label>
          </div>
          {' '}
          Shops
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
