//Styles
import styles from './HomePage.module.scss';
//Components
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
        <div className={styles.bcgColor}></div>
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
