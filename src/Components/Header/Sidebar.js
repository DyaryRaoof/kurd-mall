import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MaterialIcon from '../Shared/MateriaIcon';

import './Sidebar.css';

const Sidebar = ({ clicked, changeShowSidebar }) => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const language = localStorage.getItem('language') || 'ku';
  const subcategories = JSON.parse(localStorage.getItem('subcategories'));
  const [showSubcategories, setShowSubcategories] = useState({ show: false, categoryId: 0 });
  const { t } = useTranslation();
  const navStoreOrItem = useSelector((state) => state.designReducer.navStoreOrItem);
  const navigate = useNavigate();

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
              <span>{language === 'ku' ? c.name_ku : c.name_en}</span>
              <MaterialIcon text="arrow_drop_down" orange />
            </button>
            {' '}
            <ul className={`${showSubcategories.show && showSubcategories.categoryId === c.id ? 'show-sub-categories' : 'd-none'}`}>
              {subcategories
                .filter((sub) => sub.category_id === c.id)
                .map((sub) => (
                  <button
                    type="button"
                    key={sub.id}
                    className="subcategory-buttons"
                    onClick={() => {
                      navigate('/all-items', { state: { subcategoryId: sub.id, isStore: navStoreOrItem === 'stores' } });
                    }}
                  >
                    <li><span>{language === 'ku' ? sub.name_ku : sub.name_en}</span></li>
                  </button>
                ))}
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
