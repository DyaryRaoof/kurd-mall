import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import openMapAtPosition from './methods/openMapAtPostion';
import MateriaIcon from './MateriaIcon';

const LocationWidget = ({ position }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div id="map" />
      <div className="gray-background rounded p-2 ">
        <button
          className="icon-button"
          type="button"
          onClick={async () => {
            openMapAtPosition(position);
          }}
        >
          <div className="fw-bold">{t('location')}</div>
          <div className="d-flex justify-content-center"><MateriaIcon text="place" orange isLarge /></div>
        </button>
      </div>
    </div>
  );
};

LocationWidget.propTypes = {
  position: PropTypes.instanceOf(Object).isRequired,
};
export default LocationWidget;
