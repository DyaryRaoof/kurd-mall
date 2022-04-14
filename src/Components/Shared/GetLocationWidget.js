import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RoundOrangeIconButton from './RoundOrangeIconButton';
import openMapAtPosition from './methods/openMapAtPostion';
import MateriaIcon from './MateriaIcon';
import getUserLocation from './methods/getUserLocation';

const GetLocationWidget = ({ setParentPosition }) => {
  const [position, setPosition] = useState(null);
  const [positionLoading, setPositionLoading] = useState(false);
  const setPositionNow = async () => {
    setPositionLoading(true);
    const currentPostion = await getUserLocation();
    setParentPosition(currentPostion);
    setPosition(currentPostion);
    setPositionLoading(false);
  };
  const { t } = useTranslation();

  useEffect(() => {
    setPositionNow();
  }, []);

  return (
    <div>
      <div id="map" />
      <div className="gray-background rounded p-2 ">
        <button
          className="icon-button"
          type="button"
          onClick={async () => {
            if (!position) {
              setPositionNow();
            }
            openMapAtPosition(position);
          }}
        >
          <div className="fw-bold">{t('location')}</div>
          <div className="d-flex justify-content-center"><MateriaIcon text="place" orange isLarge /></div>
        </button>
        <div className="d-flex justify-content-end">
          {positionLoading && <div className="spinner-border text-warning" role="status" />}
          <RoundOrangeIconButton
            buttonText={t('updateMyLocation')}
            width="170px"
            padding="5px"
            isIconPresent={false}
            onPressed={async () => { setPositionNow(); }}
          />
        </div>
      </div>
    </div>
  );
};

GetLocationWidget.propTypes = {
  setParentPosition: PropTypes.func.isRequired,
};

export default GetLocationWidget;
