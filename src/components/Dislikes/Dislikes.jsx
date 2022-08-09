//Styles
import style from './Dislikes.module.css';
//Components
import HistoryBar from 'components/HistoryBar/HistoryBar';
import ReactionNav from 'components/ReactionNav/ReactionNav';
//API
import { getAllReactions } from 'utils/CatAPI';
//Hooks
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
//Loader
import { Rings } from 'react-loader-spinner';

const Dislikes = () => {
  //Hooks
  let location = useLocation();
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //Variables
  const curlocation = location.pathname.replace('/', '');

  //Dislikes load logic
  useEffect(() => {
    setIsLoading(false);
    getAllReactions().then(({ data }) => {
      setBreeds(data.filter(cat => cat.value === 0));
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
                <b className={style.selectedBreedText}>You don't like it</b>
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

export default Dislikes;
