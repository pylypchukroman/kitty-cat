import styles from './HistoryBar.module.css';
import sprite from '../../icons/sprite.svg';
import { useHistory } from 'react-router-dom';

const HistoryBar = ({ currentLocation }) => {
  const history = useHistory();
  const location = currentLocation.split('/')[0];
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
      <p className={styles.navBarText}>{location}</p>
    </div>
  );
};

export default HistoryBar;
