import styles from './ReactionNav.module.css';
import sprite from '../../icons/sprite.svg';
import { Link, NavLink } from 'react-router-dom';

const ReactionNav = () => {
  return (
    <div>
      <NavLink to="/likes">
        <button type="button" className={styles.reactionBtn}>
          <svg className={styles.reactionBtnImg}>
            <use href={sprite + '#icon-like'}></use>
          </svg>
        </button>
      </NavLink>
      <Link to="/favourites">
        <button type="button" className={styles.reactionBtn}>
          <svg className={styles.reactionBtnImg}>
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        </button>
      </Link>
      <Link to="/dislikes">
        <button type="button" className={styles.reactionBtn}>
          <svg className={styles.reactionBtnImg}>
            <use href={sprite + '#icon-dislike'}></use>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default ReactionNav;
