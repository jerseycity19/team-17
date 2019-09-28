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

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Router>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#6DcBBD', height: '10vh' }}>
            <Button className={classes.button}>
                <Link to="/resources">Resources</Link>
            </Button>
            <Button className={classes.button}>
                Gallery
            </Button>
            <Button className={classes.button}>
                Forum
            </Button>
            <Button className={classes.button}>
                Tracker
            </Button>
            <Button className={classes.button}>
                Donate
            </Button>
        </Typography> 

        <Switch>
          <Route path = "/resources">
            <Resources />
          </Route>
        </Switch>
      </Container>
      </Router>
      </div>
    );
}
      