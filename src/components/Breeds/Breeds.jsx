//Styles
import style from './Breeds.module.scss';
//Components
import HistoryBar from 'components/HistoryBar/HistoryBar';
import { Link } from 'react-router-dom';
//API
import { getBreeds } from 'utils/CatAPI';
import { getSelectedBreed } from 'utils/CatAPI';
//Hooks
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
//Images
import sprite from '../../icons/sprite.svg';
//Loader
import { Rings } from 'react-loader-spinner';
//Notification
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Breeds = () => {
  //Hooks
  let location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const [limit, setLimit] = useState('20');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedBreedList, setSelectedBreedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //Variables
  const curlocation = location.pathname.replace('/', '');

  //Limit select logic
  const changeLimit = newLimit => {
    setLimit(newLimit);
  };
  //Breeds select logic
  const changeBreed = newBreed => {
    setSelectedBreed(newBreed);
  };

  //Form submit logic
  const handleSubmit = event => {
    event.preventDefault();
    if (selectedBreed === '') {
      Notify.failure('Please, enter breed name');
      return;
    }
    setIsLoading(false);
    getSelectedBreed(selectedBreed, limit)
      .then(({ data }) => {
        if (data.length < 1) {
          Notify.failure('Wrong breed name');
        }
        setSelectedBreedList(data);
        setIsLoading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  };

  //Breeds list load logic
  useEffect(() => {
    setIsLoading(false);
    getBreeds(limit)
      .then(({ data }) => {
        setBreeds(data);
        setIsLoading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  }, [limit]);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <HistoryBar currentLocation={curlocation} />
          <div className={style.formWrapper}>
            <form onSubmit={handleSubmit} className={style.form}>
              <input
                type="text"
                className={style.searchInpute}
                placeholder="Search for breeds by name"
                onChange={event => changeBreed(event.target.value)}
                value={selectedBreed}
              />
              <button type="button" className={style.searchInnerBtnWrapper}>
                <svg className={style.searchInnerBtn}>
                  <use href={sprite + '#icon-search'}></use>
                </svg>
              </button>
            </form>
            <form>
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
            </form>
          </div>
        </div>
        <ul className={style.breedsGallery}>
          {isLoading ? (
            selectedBreedList.length < 1 ? (
              breeds.map(breed => (
                <li key={breed.id} className={style.item}>
                  <b className={style.selectedBreedText}>{breed.name}</b>
                  <Link
                    className={style.list}
                    to={{
                      pathname: `/breeds/${breed.id}`,
                      state: { from: { location } },
                    }}
                  >
                    <div className={style.imgWrapper}>
                      <img
                        loading="lazy"
                        className={style.BreedsGalleryImg}
                        src={breed.image.url}
                        alt={breed.name}
                        width="200"
                        height="200"
                      />
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              selectedBreedList.map(selectedOneBreed => (
                <li key={selectedOneBreed.id} className={style.item}>
                  <b className={style.selectedBreedText}>
                    {selectedOneBreed.breeds[0].name}
                  </b>
                  <div className={style.imgWrapper}>
                    <img
                      loading="lazy"
                      className={style.BreedsGalleryImg}
                      src={selectedOneBreed.url}
                      alt={selectedOneBreed.breeds[0].id}
                    />
                  </div>
                </li>
              ))
            )
          ) : (
            <div className={style.loaderWrapper}>
              <Rings
                height="100"
                width="100"
                color="#ff868e"
                ariaLabel="loading"
                visible={true}
              />
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Breeds;
