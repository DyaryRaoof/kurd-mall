import propTypes from 'prop-types';
import makeid from '../Shared/methods/makeid';

const Carousel = ({ images }) => (
  <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {images.map((image, index) => (
        <div
          key={makeid(10)}
          data-bs-target="#carouselExampleIndicators"
          type="button"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : 'false'}
          aria-label={`slide ${index}`}
        />
      ))}
    </div>
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div key={makeid(10)} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
          <img className="d-block w-100" src={image} alt="Slide" />
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

Carousel.propTypes = {
  images: propTypes.instanceOf(Array).isRequired,
};
export default Carousel;
