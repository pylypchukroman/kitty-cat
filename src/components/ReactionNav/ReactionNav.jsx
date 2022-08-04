import styles from './ReactionNav.module.css';
import sprite from '../../icons/sprite.svg';

const ReactionNav = () => {
  return (
    <div>
      <button type="button" className={styles.searchBtn}>
        <svg className={styles.searchBtnImg}>
          <use href={sprite + '#icon-like'}></use>
        </svg>
      </button>
      <button type="button" className={styles.searchBtn}>
        <svg className={styles.searchBtnImg}>
          <use href={sprite + '#icon-heart'}></use>
        </svg>
      </button>
      <button type="button" className={styles.searchBtn}>
        <svg className={styles.searchBtnImg}>
          <use href={sprite + '#icon-dislike'}></use>
        </svg>
      </button>
    </div>
  );
};

export default ReactionNav;
