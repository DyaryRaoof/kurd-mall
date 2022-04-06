import { t } from 'i18next';
import PropTypes from 'prop-types';

const GeneralModal = ({
  modalTitle,
  modalDescription,
  isActionButtonNeeded,
  actionButtonFunction,
  actionButtonName,
  modalName,
}) => (
  <div className="modal fade" id={modalName} tabIndex="-1" aria-labelledby={modalName} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {modalDescription}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('close')}</button>
          {isActionButtonNeeded && <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { actionButtonFunction(); }}>{actionButtonName}</button>}
        </div>
      </div>
    </div>
  </div>
);

GeneralModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalDescription: PropTypes.string.isRequired,
  isActionButtonNeeded: PropTypes.bool.isRequired,
  actionButtonFunction: PropTypes.func,
  actionButtonName: PropTypes.string,
  modalName: PropTypes.string.isRequired,
};

GeneralModal.defaultProps = {
  actionButtonFunction: null,
  actionButtonName: null,
};

export default GeneralModal;
