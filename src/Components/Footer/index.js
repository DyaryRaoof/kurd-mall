import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n, t } = useTranslation();

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
                {t('copyRight')}
                <a className="orange" href="/#">Kurd Mall</a>
              </p>
              <p>
                <a className="orange" href="/#">{t('termsAndConditions')}</a>
              </p>
              <p>
                <a className="orange" href="/#">{t('privacyPolicy')}</a>
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
                <p><a className="orange" href="/#">کوردی</a></p>
              </button>
              <p>
                <a className="orange" href="/#">{t('contactUs')}</a>
              </p>
              <p>
                <a className="orange" href="/#">{t('aboutUs')}</a>
              </p>
            </div>
            <div className="col-md-4">
              <p><a className="orange" href="/#">{t('adds')}</a></p>
              <p>
                <a className="orange" href="/#">{t('faq')}</a>
              </p>
              <p>
                <a className="orange" href="/#">{t('help')}</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
