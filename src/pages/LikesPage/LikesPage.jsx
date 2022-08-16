//Styles
import styles from './LikesPage.module.scss';
//Components
import Likes from 'components/Likes/Likes';
import Navigation from 'components/Navigation/Navigation';

const LikesPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Likes />
      </div>
    </div>
  );
};

export default LikesPage;
