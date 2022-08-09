//Styles
import style from './Gallery.module.css';
//Components
import HistoryBar from 'components/HistoryBar/HistoryBar';
//API
import { getGallery } from 'utils/CatAPI';
import { getAllBreeds } from 'utils/CatAPI';
//Hooks
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
//Images
import sprite from '../../icons/sprite.svg';
//Loader
import { Rings } from 'react-loader-spinner';

const Gallery = () => {
  //Hooks
  let location = useLocation();
  const [order, setOrder] = useState('random');
  const [type, setType] = useState('all');
  const [limit, setLimit] = useState('20');
  const [breed, setBreed] = useState('');
  const [gallery, setGallery] = useState([]);
  const [breedsList, setBreedsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //Variables
  const curlocation = location.pathname.replace('/', '');
  //Limit select logic
  const changeLimit = newLimit => {
    setLimit(newLimit);
  };
  //Type select logic
  const changeType = newType => {
    setType(newType);
  };
  //Order select logic
  const changeOrder = newOrder => {
    setOrder(newOrder);
  };
  //Breeds select logic
  const changeBreed = newBreed => {
    setBreed(newBreed);
  };
  //reload page button logic
  const reloadPage = () => {
    setIsLoading(false);
    getGallery(type, order, limit, breed).then(({ data }) => {
      setGallery(data);
      setIsLoading(true);
    });
  };
  //Main gallery load logic
  useEffect(() => {
    setIsLoading(false);
    getAllBreeds().then(({ data }) => setBreedsList(data.map(breed => breed)));
    getGallery(type, order, limit, breed).then(({ data }) => {
      setGallery(data);
      setIsLoading(true);
    });
  }, [type, order, limit, breed]);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.navWrapper}>
          <HistoryBar currentLocation={curlocation} />
          <div className={style.buttonsWrapper}>
            <button type="button" className={style.upoadBtn}>
              <svg className={style.uploadIcon}>
                <use href={sprite + '#icon-upload'}></use>
              </svg>
              <span className={style.uloadBtnText}>UPLOAD</span>
            </button>
            <button
              type="button"
              className={style.reloadBtn}
              onClick={reloadPage}
            >
              <svg className={style.reloadBtnIcon}>
                <use href={sprite + '#icon-update'}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={style.selectWrapper}>
          <div className={style.orderAndType}>
            <form>
              <label className={style.label}>
                ORDER
                <select
                  className={style.Select}
                  onChange={event => changeOrder(event.target.value)}
                  value={order}
                >
                  <option value="RANDOM">Random</option>
                  <option value="DESC">Desc</option>
                  <option value="ASC">Asc</option>
                </select>
              </label>
            </form>
            <form>
              <label className={style.label}>
                TYPE
                <select
                  className={style.Select}
                  onChange={event => changeType(event.target.value)}
                  value={type}
                >
                  <option value="jpg,png,gif">All</option>
                  <option value="jpg,png">Static</option>
                  <option value="gif">Animated</option>
                </select>
              </label>
            </form>
          </div>
          <div className={style.breedAndLimit}>
            <form>
              <label
                className={style.label}
                onChange={event => changeBreed(event.target.value)}
                value={breed}
              >
                BREED
                <select className={style.Select}>
                  <option value="">All</option>
                  {breedsList.map(breed => (
                    <option value={breed.id} key={breed.id}>
                      {breed.name}
                    </option>
                  ))}
                </select>
              </label>
            </form>
            <form>
              <label className={style.label}>
                LIMIT
                <select
                  className={style.Select}
                  onChange={event => changeLimit(event.target.value)}
                  value={limit}
                >
                  <option value="5">5 items per page</option>
                  <option value="10">10 items per page</option>
                  <option value="15">15 items per page</option>
                  <option value="20">20 items per page</option>
                </select>
              </label>
            </form>
          </div>
        </div>
        {isLoading ? (
          <ul className={style.gallery}>
            {gallery &&
              gallery.map(item => (
                <li key={item.id} className={style.item}>
                  <img
                    loading="lazy"
                    className={style.galleryImg}
                    src={item.url}
                    width="100%"
                    height="100%"
                    alt={item.name}
                  />
                </li>
              ))}
          </ul>
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
      </div>
    </>
  );
};

export default Gallery;
