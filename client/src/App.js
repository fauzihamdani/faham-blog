// import './App.css';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

// =============== Style=============

const useStyles = makeStyles((theme) => ({
   outterWrapper: {
      backgroundColor: 'green',
      height: '100px',
   },
   text1: {
      color: 'green',
      backgroundColor: 'red',
      height: '40px',
      fontSize: '30px',
   },
}));

// ==================================

function App() {
   const classes = useStyles();

   return (
      <div className={classes.outterWrapper}>
         <Typography className={classes.text1}>halo1</Typography>{' '}
      </div>
   );
}

export default App;
