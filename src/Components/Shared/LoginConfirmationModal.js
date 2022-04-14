import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
// import { Modal } from 'bootstrap';

const LoginConfirmationModal = () => {
  const navigate = useNavigate();
  return (
    <div className="modal fade" id="login-confirmation-modal" tabIndex="-1" aria-labelledby="login-confirmation-modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{t('notLoggedIn')}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            {t('youNeedToLogin')}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('close')}</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { navigate('/log-in'); }}>{t('login')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginConfirmationModal;
