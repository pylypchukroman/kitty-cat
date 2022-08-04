import styles from './HistoryBar.module.css';
import sprite from '../../icons/sprite.svg';
import { useHistory } from 'react-router-dom';

const HistoryBar = ({ currentLocation }) => {
  const history = useHistory();
  return (
    <div className={styles.historyBarWrapper}>
      <button
        type="button"
        className={styles.returnBtnWrapper}
        onClick={() => history.goBack()}
      >
        <svg className={styles.returnBtnImg}>
          <use href={sprite + '#icon-back'}></use>
        </svg>
      </button>
      <p className={styles.navBarText}>{currentLocation}</p>
    </div>
  );
};

export default HistoryBar;
