import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-75 ">
      <input type="text" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" onKeyDown={(e) => e.key === 'Enter' && navigate('/search-detail')} />
    </div>
  );
};
export default Search;
