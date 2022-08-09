//Styles
import style from './Favourites.module.css';
//Components
import ReactionNav from 'components/ReactionNav/ReactionNav';
import HistoryBar from 'components/HistoryBar/HistoryBar';
//API
import { getFavourite } from 'utils/CatAPI';
//Hooks
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
//Loader
import { Rings } from 'react-loader-spinner';

const Favourites = () => {
  //Hooks
  let location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //Variables
  const curlocation = location.pathname.replace('/', '');

  //Favourites images load logic
  useEffect(() => {
    setIsLoading(false);
    getFavourite().then(({ data }) => {
      setBreeds(data);
      setIsLoading(true);
    });
  }, []);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <HistoryBar currentLocation={curlocation} />
          <ReactionNav />
        </div>
        <ul className={style.breedsGallery}>
          {isLoading ? (
            breeds.map(breed => (
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
            ))
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

export default Favourites;
