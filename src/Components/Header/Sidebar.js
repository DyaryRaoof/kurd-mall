import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PropTypes from 'prop-types';
import categories from '../mock-data/categories';
import './Sidebar.css';
import MaterialIcon from '../Shared/MateriaIcon';

const Sidebar = ({ clicked, changeShowSidebar }) => {
  const [showSubcategories, setShowSubcategories] = useState({ show: false, categoryId: 0 });
  const { t } = useTranslation();

  return (
    <aside className={`side-bar ${clicked ? 'show-side-bar' : ''}`}>
      <div className="d-flex justify-content-end px-2 py-2">
        <button type="button" className="icon-button ms-auto" onClick={() => { changeShowSidebar(); }}>
          <MaterialIcon text="close" orange />
        </button>
      </div>
      <ul>
        <li className="side-bar-title orange">{t('categories')}</li>
        <hr className="orange" />
        {categories.map((c) => (
          <li key={c.id}>
            <button className="d-flex justify-content-between icon-button" type="button" onClick={() => { setShowSubcategories({ show: !showSubcategories.show, categoryId: c.id }); }}>
              <span>{c.name}</span>
              <MaterialIcon text="arrow_drop_down" orange />
            </button>
            {' '}
            <ul className={`${showSubcategories.show && showSubcategories.categoryId === c.id ? 'show-sub-categories' : 'd-none'}`}>
              {c.subcategories.map((sub) => <li key={sub.id}><span>{sub.name}</span></li>)}
            </ul>

            <hr />
          </li>
        ))}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  clicked: PropTypes.bool.isRequired,
  changeShowSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
