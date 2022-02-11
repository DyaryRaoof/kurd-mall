import { isMobile } from 'react-device-detect';
import getMobileOperatingSystem from './getMobileOperatingSystem';

const openMapAtPosition = (position) => {
  if (isMobile) {
    if (getMobileOperatingSystem() === 'Android') {
      window.location.href = `geo:${position.lat},${position.long}&z=16`;
    } else if (getMobileOperatingSystem() === 'iOS') {
      window.open(`http://maps.apple.com/?q=${position.lat},${position.long}&z=90`, '_blank');
    }
  } else {
    window.open(`http://maps.google.com/?q=${position.lat},${position.long}&z=16`);
  }
};

export default openMapAtPosition;
