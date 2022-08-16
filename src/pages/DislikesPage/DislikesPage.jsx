//Styles
import styles from './DislikesPage.module.scss';
//Components
import Dislikes from 'components/Dislikes/Dislikes';
import Navigation from 'components/Navigation/Navigation';

const DislikePage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Dislikes />
      </div>
    </div>
  );
};

export default DislikePage;
