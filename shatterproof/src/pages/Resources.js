import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import Map from './Map.js'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(5),
    },
    input: {
      display: 'none',
    },
}));

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(teal[300]),
      backgroundColor: teal[300],
      '&:hover': {
        backgroundColor: teal[500],
      },
    },
  }))(Button);

  const ColoredLine = () => (
        <hr
            style = {{
                color: teal[300],
                backgroundColor: teal[300],
                height: 5
            }}
        />
  )

class Resources extends React.Component {
    render(){
        return(
            <div>
                <div align="center">
                    <h1>Treatment Centers Nearby</h1>
                </div>
                <div align="center">
                    <p></p>
                </div>
                <div className='map-wrap'>
                <Map/>
                </div>
                <div align="center">
                    
                </div>
                <div align="center">
                    <ColoredLine />
                </div>
                <div align="center">
                    <h2>Reviews</h2>
                </div>
                <div>
                    <h3>Kevin</h3>
                    <p>I have personally spoke with dozens of people who have completed Adanced Health and Educations program. They all love the facility and staff. If you or someone you love is in need of a drug rehab in New Jersey give this center a call, you won't be disappointed.</p>
                </div>
            </div>
        )
    }
}

export default Resources;