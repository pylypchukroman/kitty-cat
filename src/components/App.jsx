//Styles
import styles from './App.module.scss';
//Components
import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
//Loader
import { Rings } from 'react-loader-spinner';

//Imports
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const VotingPage = lazy(() => import('../pages/VotingPage/VotingPage'));
const BreedsPage = lazy(() => import('../pages/BreedsPage/BreedsPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
const LikesPage = lazy(() => import('../pages/LikesPage/LikesPage'));
const FavouritesPage = lazy(() =>
  import('../pages/FavouritesPage/FavouritesPage')
);
const DislikePage = lazy(() => import('../pages/DislikesPage/DislikesPage'));
const BreedDetailsPage = lazy(() =>
  import('../pages/BreedDetailsPage/BreedDetailsPage')
);

export const App = () => {
  return (
    <div className={styles.container}>
      <Suspense
        fallback={
          <div className={styles.loaderWrapper}>
            <Rings
              height="200"
              width="200"
              color="#ff868e"
              ariaLabel="loading"
              visible={true}
            />
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/voting">
            <VotingPage />
          </Route>
          <Route exact path="/breeds">
            <BreedsPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/likes">
            <LikesPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
          <Route path="/dislikes">
            <DislikePage />
          </Route>
          <Route path="/breeds/:breedId">
            <BreedDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
