//Styles
import styles from './ReactionNav.module.scss';
//Images
import sprite from '../../icons/sprite.svg';
//Components
import { NavLink } from 'react-router-dom';

const ReactionNav = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink
        to="/likes"
        className={styles.linkLikes}
        activeClassName={styles.activLike}
      >
        <svg className={styles.reactionIconLikes}>
          <use href={sprite + '#icon-like'}></use>
        </svg>
      </NavLink>
      <NavLink
        to="/favourites"
        className={styles.linkFavourites}
        activeClassName={styles.activFavourites}
      >
        <svg className={styles.reactionIconFafourites}>
          <use href={sprite + '#icon-heart'}></use>
        </svg>
      </NavLink>
      <NavLink
        to="/dislikes"
        className={styles.linkDislike}
        activeClassName={styles.activDislikes}
      >
        <svg className={styles.reactionIconDislikes}>
          <use href={sprite + '#icon-dislike'}></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default ReactionNav;
