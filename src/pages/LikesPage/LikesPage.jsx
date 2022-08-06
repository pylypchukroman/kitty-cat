import Likes from 'components/Likes/Likes';
import Navigation from 'components/Navigation/Navigation';
import styles from './LikesPage.module.css';

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
