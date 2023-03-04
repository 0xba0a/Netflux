import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  poster: {
    borderRadius: '20px',
    display: 'flex',
    boxShadow: '0.5em 0.5em 1em rgb(64, 64, 70)',
    maxWidth: '90%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto 30px',
      width: '50%',
      // height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      // height: '350px',
      marginBottom: '30px',
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
}));

