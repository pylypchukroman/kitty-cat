import style from './Favourites.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import HistoryBar from 'components/HistoryBar/HistoryBar';
import { getFavourite } from 'utils/CatAPI';

const Favourites = () => {
  let location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const curlocation = location.pathname.replace('/', '');

  useEffect(() => {
    getFavourite().then(({ data }) => setBreeds(data));
  }, []);
  console.log(breeds);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <HistoryBar currentLocation={curlocation} />
        </div>
        <ul className={style.breedsGallery}>
          {breeds.map(breed => (
            <li key={breed.id} className={style.item}>
              <div className={style.imgWrapper}>
                <img
                  className={style.BreedsGalleryImg}
                  src={breed.image.url}
                  alt={breed.name}
                  width="200"
                  height="200"
                />
              </div>
              <b className={style.selectedBreedText}>You love it</b>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favourites;
