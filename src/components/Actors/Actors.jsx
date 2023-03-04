import React from 'react';
import { Box, Button, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { ArrowBack } from '@mui/icons-material';
import useStyles from './styles';
import { useGetActorMoviesQuery, useGetActorQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';

const Actors = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const { data, isFetching, error } = useGetActorQuery(id);
  const { data: actorMovies, isFetching: actorMoviesIsFetching } = useGetActorMoviesQuery({ id, page });
  const navigate = useNavigate();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          Something went wrong, please go back.
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid container item direction="column" lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph>
            {data?.biography || 'Sorry, no biography yet...'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {actorMovies && <MovieList movies={actorMovies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={actorMovies?.total_pages} />
      </Box>
    </>
  );
};

export default Actors;
