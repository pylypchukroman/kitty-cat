//Styles
import styles from './VotingPage.module.css';
//Components
import Navigation from 'components/Navigation/Navigation';
import Voting from 'components/Voting/Voting';

const VotingPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.wrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSide}>
        <Voting />
      </div>
    </div>
  );
};

export default VotingPage;
