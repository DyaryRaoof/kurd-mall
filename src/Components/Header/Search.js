import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-75 ">
      <input type="text" className="form-control w-100" aria-describedby="emailHelp" placeholder={t('search')} onKeyDown={(e) => e.key === 'Enter' && navigate('/search-detail')} />
    </div>
  );
};
export default Search;
