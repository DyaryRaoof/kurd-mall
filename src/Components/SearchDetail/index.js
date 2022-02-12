import './SearchDetail.css';
import items from '../mock-data/items';
import ItemCard from '../Shared/ItemCard';
import Pagination from '../Shared/Pagination';

const SearchDetail = () => (
  <main className="container">
    <h1>Search Results</h1>
    <div className="d-flex justify-content-between">
      <div>
        <span>Showing 20 out of 2000 results</span>
      </div>
      <button type="button" className="btn btn-outline-warning rounded-pill order-by-button orange">
        Order by: High to Low
      </button>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <div>
          <div className="orange fw-bold">
            Price
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <input className="form-control" type="number" />
              IQD
            </div>
            <div className="orange mx-1">
              To
            </div>
            <div className="d-flex align-items-center">
              <input className="form-control" type="number" />
              IQD
            </div>
          </div>
          <div>
            <div className="orange fw-bold">
              Stars
              <input className="form-control" type="number" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="d-flex">
          <div className="vertical-line d-none d-sm-block" />
          <div>
            {items.map((item) => (
              <ItemCard
                key={item.id}
                name={item.name}
                stars={item.stars}
                price={item.price}
                image={item.image}
                leftInStock={item.leftInStock}
                isSearchItem
              />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Pagination currentPage={1} totalPages={10} onPageChange={() => { }} />
        </div>

      </div>
    </div>
  </main>
);

export default SearchDetail;
