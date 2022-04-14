import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';
import { t } from 'i18next';

const SpinnerModal = ({ children }) => {
  const show = useSelector((state) => state.designReducer.showSpinnerModal);
  const [isActive, setActive] = useState(true);
  const { innerHeight: height } = window;

  useEffect(() => {
    if (show) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [show]);

  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text={t('loading')}
    >
      <div style={{ height }}>
        {children}
      </div>
    </LoadingOverlay>
  );
};

SpinnerModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SpinnerModal;
