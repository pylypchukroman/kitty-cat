import { getBreeds } from 'utils/CatAPI';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import HistoryBar from 'components/HistoryBar/HistoryBar';
import { getAllReactions } from 'utils/CatAPI';
import style from './Dislikes.module.css';

const Dislikes = () => {
  let location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const curlocation = location.pathname.replace('/', '');

  useEffect(() => {
    getAllReactions().then(({ data }) =>
      setBreeds(data.filter(cat => cat.value === 0))
    );
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
              <b className={style.selectedBreedText}>You don't like it</b>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dislikes;
