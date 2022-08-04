import SearchForm from 'components/SearchForm/SearchForm';
import style from './Breeds.module.css';
import sprite from '../../icons/sprite.svg';
import { getBreeds } from 'utils/CatAPI';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import HistoryBar from 'components/HistoryBar/HistoryBar';
import { getSelectedBreed } from 'utils/CatAPI';

const Breeds = () => {
  let location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [selectedBreed, setSelectedBreed] = useState('');
  const curlocation = location.pathname.replace('/', '');

  const changeLimit = newLimit => {
    setLimit(newLimit);
  };
  const changeBreed = newBreed => {
    setSelectedBreed(newBreed);
  };
  const handleSubmit = event => {
    event.preventDefault();
    getSelectedBreed(selectedBreed, limit).then(({ data }) => setBreeds(data));
  };

  useEffect(() => {
    getBreeds(limit).then(({ data }) => setBreeds(data));
  }, [limit]);

  console.log(breeds);
  return (
    <>
      <div className={style.navBar}>
        <HistoryBar currentLocation={curlocation} />
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className={style.searchInpute}
              placeholder="Search for breeds by name"
              onChange={event => changeBreed(event.target.value)}
            />
            <button type="button" className={style.searchInnerBtnWrapper}>
              <svg className={style.searchInnerBtn}>
                <use href={sprite + '#icon-search'}></use>
              </svg>
            </button>
          </label>
        </form>
        <form>
          <label>
            <select
              className={style.limitSelect}
              onChange={event => changeLimit(event.target.value)}
              value={limit}
            >
              <option value="5">Limit: 5</option>
              <option value="10">Limit: 10</option>
              <option value="15">Limit: 15</option>
              <option value="20">Limit: 20</option>
            </select>
          </label>
        </form>
      </div>
      <ul className={style.breedsGallery}>
        {breeds &&
          breeds.map(breed => (
            <li key={breed.id}>
              <img src={breed.url} alt={breed.name} width="200" height="200" />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Breeds;
