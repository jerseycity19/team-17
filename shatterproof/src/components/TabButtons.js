import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3),
    backgroundColor: '#fffff',
  },
  input: {
    display: 'none',
  },
}));

function Resources() {
  return <h2>Resources</h2>;
}

function Gallery() {
  return <h2>Gallery</h2>
}

function Forum() {
  return <h2>Forum</h2>
}

function Tracker() {
  return <h2>Tracker</h2>
}

function Donate() {
  return <h2>Donate</h2>
}

const OutlinedButtons =({
  history
})=> {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#6DcBBD', height: '10vh' }}>
<<<<<<< HEAD
            {/* <Button className={classes.button}>
                Home
            </Button> */}
            <Button className={classes.button}>
=======
            <Button className={classes.button} onClick={()=>history.push('/resources')}>
>>>>>>> master
                Resources
            </Button>
            <Button className={classes.button}>
              <Link to="/gallery">Gallery</Link>
            </Button>
            <Button className={classes.button}>
              <Link to="/forum">Forum</Link>
            </Button>
            <Button className={classes.button}>
              <Link to="/tracker">Tracker</Link>
            </Button>
            <Button className={classes.button}>
              <Link to="/donate">Donate</Link>
            </Button>
            {/* <Button className={classes.button}>
                Login
            </Button>
            <Button className={classes.button}>
                Register
            </Button> */}
        </Typography> 
        
        <Switch>
          <Route path = "/resources">
            <Resources/>
          </Route>
        </Switch>
      </Container>
      </div>
    );
}

export default OutlinedButtons;