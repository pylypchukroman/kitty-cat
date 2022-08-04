import styles from './App.module.css';

import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const VotingPage = lazy(() => import('../pages/VotingPage/VotingPage'));
const BreedsPage = lazy(() => import('../pages/BreedsPage/BreedsPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/voting">
            <VotingPage />
          </Route>
          <Route path="/breeds">
            <BreedsPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
