import Favourites from 'components/Favourites/Favourites';
import Navigation from 'components/Navigation/Navigation';
import styles from './FavouritesPage.module.css';

const FavouritesPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Favourites />
      </div>
    </div>
  );
};

export default FavouritesPage;
