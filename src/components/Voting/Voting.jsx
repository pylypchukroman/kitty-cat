//Styles
import style from './Voting.module.css';
//Components
import HistoryBar from 'components/HistoryBar/HistoryBar';
import ReactionNav from '../ReactionNav/ReactionNav';
//API
import { getRandomCat } from '../../utils/CatAPI';
import { voteUp } from '../../utils/CatAPI';
import { voteDown } from '../../utils/CatAPI';
import { favouriteImage } from '../../utils/CatAPI';
//Hooks
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
//Images
import spriteWhite from '../../icons/sprit-white.svg';
//Loader
import { Rings } from 'react-loader-spinner';
//Notifications
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Voting = () => {
  //Hooks
  let location = useLocation();
  const [cat, setCat] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //Variables
  const imageId = cat.id;
  const userId = 'Cat Lover';
  const curlocation = location.pathname.replace('/', '');
  //Notifications
  Notify.init();
  Notify.merge({
    width: '550px',
    position: 'right-bottom',
    distance: '100px',
    useIcon: false,
    fontFamily: 'Jost',
    fontSize: '13px',
    cssAnimationStyle: 'zoom',
    success: {
      background: '#97eab9',
    },
    failure: {
      background: '#ff868e',
    },
    warning: {
      background: '#ffd280',
    },
  });

  //Image load logic
  useEffect(() => {
    setIsLoading(false);
    getRandomCat()
      .then(({ data }) => {
        setCat(data[0]);
        setIsLoading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  }, []);

  //Favourites button logic
  function onfavouritesBtnClick() {
    setIsLoading(false);
    favouriteImage(imageId, userId).then(({ data }) =>
      Notify.failure(data.message)
    );
    getRandomCat()
      .then(({ data }) => {
        setCat(data[0]);
        setIsLoading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  }

  //Likes button logic
  function onLikeBtnClick() {
    setIsLoading(false);
    voteUp(imageId, userId).then(({ data }) => Notify.success(data.message));
    getRandomCat()
      .then(({ data }) => {
        setCat(data[0]);
        setIsLoading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  }

  //Dislikes button logic
  function onDislikeBtnClick() {
    setIsLoading(false);
    voteDown(imageId, userId).then(({ data }) => Notify.warning(data.message));
    getRandomCat()
      .then(({ data }) => {
        setCat(data[0]);
        setIsLoading(true);
      })
      .catch(err => {
        let message =
          typeof err.response !== 'undefined'
            ? err.response.data.message
            : err.message;
        console.warn('error', message);
      });
  }

  return (
    <>
      <div className={style.navBar}>
        <div className={style.navBarWrapper}>
          <HistoryBar currentLocation={curlocation} />
          <ReactionNav />
        </div>
        {isLoading ? (
          <div className={style.imageWrapper}>
            <img
              loading="lazy"
              className={style.randomCat}
              src={cat.url}
              alt=""
            />
          </div>
        ) : (
          <div className={style.loaderWrapper}>
            <Rings
              height="100"
              width="100"
              color="#ff868e"
              ariaLabel="loading"
              visible={true}
            />
          </div>
        )}

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
      </div>
    </>
  );
};

export default Voting;
