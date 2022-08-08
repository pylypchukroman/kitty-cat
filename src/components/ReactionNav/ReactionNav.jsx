import styles from './ReactionNav.module.css';
import sprite from '../../icons/sprite.svg';
import { NavLink } from 'react-router-dom';

const ReactionNav = () => {
  return (
    <div>
      <NavLink to="/likes" activeClassName={styles.activ}>
        <button type="button" className={styles.reactionBtn}>
          <svg className={styles.reactionBtnImg}>
            <use href={sprite + '#icon-like'}></use>
          </svg>
        </button>
      </NavLink>
      <NavLink to="/favourites" activeClassName={styles.activ}>
        <button type="button" className={styles.reactionBtn}>
          <svg className={styles.reactionBtnImg}>
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        </button>
      </NavLink>
      <NavLink to="/dislikes" activeClassName={styles.activ}>
        <button type="button" className={styles.reactionBtn}>
          <svg className={styles.reactionBtnImg}>
            <use href={sprite + '#icon-dislike'}></use>
          </svg>
        </button>
      </NavLink>
    </div>
  );
};

export default ReactionNav;
