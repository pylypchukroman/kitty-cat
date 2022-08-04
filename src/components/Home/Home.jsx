import styles from './Home.module.css';
import mainBcgImg from '../../images/main-bcf-img-min.png';

const Home = () => {
  return (
    <img
      className={styles.mainBcgImg}
      src={mainBcgImg}
      alt=""
      width="775"
      height="900"
    />
  );
};

export default Home;
