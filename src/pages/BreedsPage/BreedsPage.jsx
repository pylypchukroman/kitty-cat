//Styles
import styles from './BreedsPage.module.css';
//Components
import Navigation from 'components/Navigation/Navigation';
import Breeds from 'components/Breeds/Breeds';

const BreedsPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Breeds />
      </div>
    </div>
  );
};

export default BreedsPage;
