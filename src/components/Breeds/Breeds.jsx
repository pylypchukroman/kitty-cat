import SearchForm from 'components/SearchForm/SearchForm';
import style from './Breeds.module.css';
import sprite from '../../icons/sprite.svg';
import { getBreeds } from 'utils/CatAPI';
import { useEffect, useState } from 'react';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [selectedBreed, setSelectedBreed] = useState('All breeds');

  const breedsList = breeds.map(breed => breed.name);

  const changeLimit = newLimit => {
    setLimit(newLimit);
  };
  const changeBreed = newBreed => {
    setSelectedBreed(newBreed);
  };

  useEffect(() => {
    getBreeds(limit).then(({ data }) => setBreeds(data));
  }, [limit]);

  function onBtnUpClick() {
    console.log('click');
  }

  function onBtnDownClick() {
    console.log('click');
  }

  return (
    <>
      <SearchForm />
      <div className={style.navBar}>
        <button type="button" className={style.returnBtnWrapper}>
          <svg className={style.returnBtnImg}>
            <use href={sprite + '#icon-back'}></use>
          </svg>
        </button>
        <p className={style.navBarText}>BREEDS</p>

        <form>
          <label>
            <select
              className={style.breedsSelect}
              onChange={event => changeBreed(event.target.value)}
              value={selectedBreed}
            >
              <option value="All breeds">All Breeds</option>
              {breedsList &&
                breedsList.map(breed => (
                  <option value={breed} key={breed}>
                    {breed}
                  </option>
                ))}
            </select>
          </label>
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
        <button
          type="button"
          className={style.sortUpBtn}
          onClick={onBtnUpClick}
        >
          <svg className={style.sortUpImg}>
            <use href={sprite + '#icon-sort-up'}></use>
          </svg>
        </button>
        <button
          type="button"
          className={style.sortUpBtn}
          onClick={onBtnDownClick}
        >
          <svg className={style.sortUpImg}>
            <use href={sprite + '#icon-sort-up'}></use>
          </svg>
        </button>
      </div>
      <ul className={style.breedsGallery}>
        {breeds &&
          breeds.map(breed => (
            <li key={breed.id}>
              <img
                src={breed.image.url}
                alt={breed.name}
                width="200"
                height="200"
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Breeds;
