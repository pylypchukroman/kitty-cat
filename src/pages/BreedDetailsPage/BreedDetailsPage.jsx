//Styles
import styles from './BreedDetailsPage.module.scss';
//Components
import Breed from 'components/BreedDetails/BreedDetails';
import Navigation from 'components/Navigation/Navigation';

const BreedDetailsPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Breed />
      </div>
    </div>
  );
};

export default BreedDetailsPage;
