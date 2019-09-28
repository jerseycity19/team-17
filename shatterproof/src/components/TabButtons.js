import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3),
    backgroundColor: '#fffff',
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#6DcBBD', height: '12vh'}}>
            <Button className={classes.button}>
                Resources
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
      </Container>
      </div>
    );
}
