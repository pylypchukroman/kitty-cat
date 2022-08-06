import styles from './ReactionNav.module.css';
import sprite from '../../icons/sprite.svg';
import { Link, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import LikesPage from 'pages/LikesPage/LikesPage';
import DislikePage from 'pages/DislikesPage/DislikesPage';
import FavouritesPage from 'pages/FavouritesPage/FavouritesPage';

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
