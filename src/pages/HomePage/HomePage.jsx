import styles from './HomePage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Home from 'components/Home/Home';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
