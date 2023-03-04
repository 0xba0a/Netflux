import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, useRoutes } from 'react-router-dom';

import useStyles from './styles';

import { Navbar, Actors, MovieInformation, Movies, Profile } from '.';
import useAlan from './Alan';

const App = () => {
  const classes = useStyles();
  const element = <Movies />;
  const alanBtnContainer = React.useRef();

  const MoviesPath = () => useRoutes(['/', '/approved'].map((path) => ({ path, element })));

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          {/* <Route exact path="/" element={<Movies />} /> */}
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
        <MoviesPath />
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
