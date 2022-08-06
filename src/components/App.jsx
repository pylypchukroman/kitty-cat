import styles from './App.module.css';

import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const VotingPage = lazy(() => import('../pages/VotingPage/VotingPage'));
const BreedsPage = lazy(() => import('../pages/BreedsPage/BreedsPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
const LikesPage = lazy(() => import('../pages/LikesPage/LikesPage'));
const FavouritesPage = lazy(() =>
  import('../pages/FavouritesPage/FavouritesPage')
);
const DislikePage = lazy(() => import('../pages/DislikesPage/DislikesPage'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/voting">
            <VotingPage />
          </Route>
          <Route path="/breeds">
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
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
