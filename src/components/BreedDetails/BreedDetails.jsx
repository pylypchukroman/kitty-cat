//Styles
import style from './BreedDetails.module.css';
//Components
import HistoryBar from 'components/HistoryBar/HistoryBar';
//API
import { getBreedDetails } from 'utils/CatAPI';
//Hooks
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
//Loader
import { Rings } from 'react-loader-spinner';

const Breed = () => {
  //Hooks
  const { breedId } = useParams();
  let location = useLocation();
  const [breedDetails, setBreedDetails] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  //Variables
  const curlocation = location.pathname.replace('/', '');
  const breedInfo = breedDetails.length < 1 ? [] : breedDetails[0].breeds[0];
  const weight = breedInfo.length < 1 ? [] : breedInfo.weight.metric;

  //Breed list load logic
  useEffect(() => {
    setIsloading(false);
    getBreedDetails(breedId)
      .then(({ data }) => {
        setBreedDetails(data);
        setIsloading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  }, [breedId]);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.navBarWrapper}>
          <HistoryBar currentLocation={curlocation} />
          {isLoading ? (
            <div className={style.imageWrapper}>
              <ul>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {breedDetails &&
                    breedDetails.map(breed => (
                      <SwiperSlide key={breed.id}>
                        <li key={breed.id} className={style.item}>
                          <img
                            loading="lazy"
                            className={style.randomCat}
                            src={breed.url}
                            alt="Breed details"
                            width="100"
                            height="100"
                          />
                        </li>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </ul>
              <div className={style.breedInfornation}>
                <div className={style.titleWrapper}>
                  <h2 className={style.name}>{breedInfo.name}</h2>
                </div>
                <p className={style.description}>{breedInfo.description}</p>
                <ul className={style.list}>
                  <li className={style.infoItem}>
                    <p className={style.title}>Temperament: </p>
                    <p className={style.infoDescription}>
                      {breedInfo.temperament}
                    </p>
                  </li>
                  <li className={style.infoItem}>
                    <p className={style.title}>
                      Origin:
                      <span className={style.infoDescription}>
                        {' ' + breedInfo.origin}
                      </span>
                    </p>
                    <p className={style.title}>
                      Weight:
                      <span className={style.infoDescription}>
                        {' ' + weight} kgs
                      </span>
                    </p>
                    <p className={style.title}>
                      Life span:
                      <span className={style.infoDescription}>
                        {' ' + breedInfo.life_span} years
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default Breed;
