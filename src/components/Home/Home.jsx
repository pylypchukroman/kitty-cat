//Styles
import styles from './Home.module.css';
//Images
import mainBcgImg from '../../images/main-bcf-img-min.png';

const Home = () => {
  return (
    <>
      <img
        loading="lazy"
        className={styles.mainBcgImg}
        src={mainBcgImg}
        alt="Main foto"
      />
    </>
  );
};

export default Home;
