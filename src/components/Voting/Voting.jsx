import style from './Voting.module.css';
import spriteWhite from '../../icons/sprit-white.svg';
import ReactionNav from '../ReactionNav/ReactionNav';
import { getRandomCat } from '../../utils/CatAPI';
import { voteUp } from '../../utils/CatAPI';
import { voteDown } from '../../utils/CatAPI';
import { favouriteImage } from '../../utils/CatAPI';
import { useEffect, useState } from 'react';
import HistoryBar from 'components/HistoryBar/HistoryBar';
import { useLocation } from 'react-router';

const Voting = () => {
  let location = useLocation();
  const [cat, setCat] = useState({});
  const imageId = cat.id;
  const userId = 'Cat Lover';

  useEffect(() => {
    getRandomCat().then(({ data }) => setCat(data[0]));
  }, []);

  function onfavouritesBtnClick() {
    console.log('click Fav');
    favouriteImage(imageId, userId).then(({ data }) => console.log(data));
    getRandomCat().then(({ data }) => setCat(data[0]));
  }
  function onLikeBtnClick() {
    console.log('click Like');
    voteUp(imageId, userId).then(({ data }) => console.log(data));
    getRandomCat().then(({ data }) => setCat(data[0]));
  }
  function onDislikeBtnClick() {
    console.log('click Dis');
    voteDown(imageId, userId).then(({ data }) => console.log(data));
    getRandomCat().then(({ data }) => setCat(data[0]));
  }

  const curlocation = location.pathname.replace('/', '');

  return (
    <>
      <div className={style.navBar}>
        <HistoryBar currentLocation={curlocation} />
        <ReactionNav />
      </div>
      <div className={style.imageWrapper}>
        <img className={style.randomCat} src={cat.url} alt="" />
      </div>
      <div className={style.votingPanel}>
        <button
          className={style.likeBtn}
          type="button"
          onClick={onLikeBtnClick}
        >
          <svg className={style.votingPanelIconImg}>
            <use href={spriteWhite + '#icon-like-white-30'}></use>
          </svg>
        </button>
        <button
          className={style.favouritesBtn}
          type="button"
          onClick={onfavouritesBtnClick}
        >
          <svg className={style.votingPanelIconImg}>
            <use href={spriteWhite + '#icon-fav-white-30'}></use>
          </svg>
        </button>
        <button
          className={style.dislikeBtn}
          type="button"
          onClick={onDislikeBtnClick}
        >
          <svg className={style.votingPanelIconImg}>
            <use href={spriteWhite + '#icon-dislike-white-30'}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Voting;
