//Styles
import styles from './Home.module.scss';
//Images
import mainBcgImg from '../../images/main-bcf-img-min.png';

const Home = () => {
  return (
    <>
      <img className={styles.mainBcgImg} src={mainBcgImg} alt="Main foto" />
    </>
  );
};

export default Home;
