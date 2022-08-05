import style from './Gallery.module.css';
import { useLocation } from 'react-router';
import HistoryBar from 'components/HistoryBar/HistoryBar';
import sprite from '../../icons/sprite.svg';
import { useEffect, useState } from 'react';
import { getGallery } from 'utils/CatAPI';

const Gallery = () => {
  let location = useLocation();
  const curlocation = location.pathname.replace('/', '');
  const [order, setOrder] = useState('random');
  const [type, setType] = useState('all');
  const [limit, setLimit] = useState('20');
  const [gallery, setGallery] = useState([]);

  const changeLimit = newLimit => {
    setLimit(newLimit);
  };
  const changeType = newType => {
    setType(newType);
  };
  const changeOrder = newOrder => {
    setOrder(newOrder);
  };

  useEffect(() => {
    getGallery(type, order, limit).then(({ data }) => setGallery(data));
  }, [type, order, limit]);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.navWrapper}>
          <HistoryBar currentLocation={curlocation} />
          <button type="button" className={style.upoadBtn}>
            <svg className={style.uploadIcon}>
              <use href={sprite + '#icon-upload'}></use>
            </svg>
            <span className={style.uloadBtnText}>UPLOAD</span>
          </button>
        </div>
        <div className={style.selectWrapper}>
          <div className={style.orderAndType}>
            <form>
              <label className={style.orderForm}>
                <span className={style.FormText}>ORDER</span>
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
              <label className={style.typeForm}>
                <span className={style.FormText}>TYPE</span>
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
              <label className={style.orderForm}>
                <span className={style.FormText}>BREED</span>
                <select className={style.Select}>
                  <option value="none">None</option>
                  <option value="abyssinian">Abyssinian</option>
                  <option value="dengal">Bengal</option>
                  <option value="agean">Agean</option>
                </select>
              </label>
            </form>
            <form>
              <label className={style.typeForm}>
                <span className={style.FormText}>LIMIT</span>
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
        <ul className={style.gallery}>
          {gallery &&
            gallery.map(item => (
              <li key={item.id} className={style.item}>
                <img
                  className={style.galleryImg}
                  src={item.url}
                  width="100%"
                  height="100%"
                  alt={item.name}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Gallery;
