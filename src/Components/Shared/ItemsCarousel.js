import { useRef } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from './MateriaIcon';
import items from '../mock-data/items';
import ItemCard from './ItemCard';
import './ItemCarousel.css';

const ItemsCarousel = ({ subcategoryName, isStore }) => {
  const carouselRef = useRef(null);
  const scroll = async (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="d-flex justify-content-between orange mx-2 mb-2">
        <u>{subcategoryName}</u>
        <u>See All</u>
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
              name={item.name}
              stars={item.stars}
              price={item.price}
              image={item.image}
              leftInStock={item.leftInStock}
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
};

ItemsCarousel.defaultProps = {
  isStore: false,
};

export default ItemsCarousel;
