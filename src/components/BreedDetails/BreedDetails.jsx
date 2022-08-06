import HistoryBar from 'components/HistoryBar/HistoryBar';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { getBreedDetails } from 'utils/CatAPI';
import style from './BreedDetails.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const Breed = () => {
  const { breedId } = useParams();
  let location = useLocation();
  const [breedDetails, setBreedDetails] = useState([]);

  const curlocation = location.pathname.replace('/', '');
  const breedInfo = breedDetails.length < 1 ? [] : breedDetails[0].breeds[0];
  const weight = breedInfo.length < 1 ? [] : breedInfo.weight.metric;

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
          <h2>{breedInfo.name}</h2>
          <p>{breedInfo.description}</p>
          <ul className={style.list}>
            <li className={style.infoItem}>
              Temperament:
              <p>{breedInfo.temperament}</p>
            </li>
            <li className={style.infoItem}>
              <p>Origin: {breedInfo.origin}</p>
              <p>Weight: {weight} kgs</p>
              <p>Life span: {breedInfo.life_span} years</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breed;
