import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer className="orange">
      <hr />
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6" />
          <div className="col-md-6" />
        </div>
        <div className="orange text-center">
          <div className="row">
            <div className="col-md-4">
              <p className="orange">
                © 2022 Copyright:
                <a className="orange" href="/#">Kurd Mall</a>
              </p>
              <p>
                <a className="orange" href="/#">Terms & Conditions</a>
              </p>
              <p>
                <a className="orange" href="/#">Privacy Policy</a>
              </p>

            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="icon-button"
                value="en"
                onClick={() => {
                  i18n.changeLanguage('en');
                  localStorage.setItem('language', 'en');
                }}
              >
                <p><a className="orange" href="/#">English</a></p>
              </button>
              <button
                type="button"
                className="icon-button"
                value="ku"
                onClick={() => {
                  i18n.changeLanguage('ku');
                  localStorage.setItem('language', 'ku');
                }}
              >
                <p><a className="orange" href="/#">Kurdish</a></p>
              </button>
              <p>
                <a className="orange" href="/#">Contact Us</a>
              </p>
              <p>
                <a className="orange" href="/#">About Us</a>
              </p>
            </div>
            <div className="col-md-4">
              <p><a className="orange" href="/#">Adds</a></p>
              <p>
                <a className="orange" href="/#">FAQ</a>
              </p>
              <p>
                <a className="orange" href="/#">Help</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
