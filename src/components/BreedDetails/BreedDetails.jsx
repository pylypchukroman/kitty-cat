//Styles
import style from './BreedDetails.module.css';
//Components
import HistoryBar from 'components/HistoryBar/HistoryBar';
//API
import { getBreedDetails } from 'utils/CatAPI';
//Hooks
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
//Loader
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const Breed = () => {
  //Hooks
  const { breedId } = useParams();
  let location = useLocation();
  const [breedDetails, setBreedDetails] = useState([]);
  //Variables
  const curlocation = location.pathname.replace('/', '');
  const breedInfo = breedDetails.length < 1 ? [] : breedDetails[0].breeds[0];
  const weight = breedInfo.length < 1 ? [] : breedInfo.weight.metric;

  //Breed list load logic
  useEffect(() => {
    getBreedDetails(breedId).then(({ data }) => setBreedDetails(data));
  }, [breedId]);

  return (
    <>
      <div className={style.navBar}>
        <div className={style.navBarWrapper}>
          <HistoryBar currentLocation={curlocation} />
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
                          className={style.randomCat}
                          src={breed.url}
                          alt=""
                          width="100"
                          height="100"
                        />
                      </li>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </ul>
          </div>
        </div>
        <div className={style.breedInfornation}>
          <div className={style.titleWrapper}>
            <h2 className={style.name}>{breedInfo.name}</h2>
          </div>
          <p className={style.description}>{breedInfo.description}</p>
          <ul className={style.list}>
            <li className={style.infoItem}>
              <p className={style.title}>Temperament: </p>
              <p className={style.infoDescription}>{breedInfo.temperament}</p>
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
    </>
  );
};

export default Breed;
