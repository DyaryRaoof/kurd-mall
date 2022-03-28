import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import MaterialIcon from './MateriaIcon';
import ItemCard from './ItemCard';
import './ItemCarousel.css';

const ItemsCarousel = ({
  subcategoryName, isStore, items, subcategoryId,
}) => {
  const carouselRef = useRef(null);
  const scroll = async (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <div className="d-flex justify-content-between orange mx-2 mb-2">
        <u>{subcategoryName}</u>
        <button type="button" className="icon-button" onClick={() => navigate('/all-items', { state: { subcategoryId, isStore } })}>
          <u className="orange">{t('seeAll')}</u>
        </button>
      </div>
      <div className="d-flex justify-content-between carousel-button d-block d-lg-none">
        <button type="button" className="icon-button" onClick={() => { scroll(-200); }}>
          <MaterialIcon text="arrow_back_ios" orange className="carousel-button carousel-button-left" />
        </button>
        <button type="button" className="icon-button" onClick={() => { scroll(200); }}>
          <MaterialIcon text="arrow_forward_ios" orange className="carousel-button carousel-button-right" />
        </button>
      </div>

      <div className="item-carousel" ref={carouselRef}>

        <div className="d-flex justify-content-start">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              isStore={isStore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ItemsCarousel.propTypes = {
  subcategoryName: PropTypes.string.isRequired,
  isStore: PropTypes.bool,
  items: PropTypes.instanceOf(Array).isRequired,
  subcategoryId: PropTypes.number.isRequired,
};

ItemsCarousel.defaultProps = {
  isStore: false,
};

export default ItemsCarousel;
