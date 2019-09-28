import React from 'react';
import logo from '../ShatterproofLogo.png';
import Button from '@material-ui/core/Button';

class Why extends React.Component {
    render(){
        return(
            <div>
                <div align="center">
                    <p>Why are you here?</p>
                </div>
                <div align="center">
                <p></p>
                </div>
                <div align="center">
                <Button variant="outlined" size="large" color="primary" align="center">
                 Get Help
                </Button>
                </div>
                <div align="center">
                <p></p>
                </div>
                <div align="center">
                <Button variant="outlined" size="large" color="primary" align="center">
                 Give Help
                </Button>
                </div>
            </div>
        )
    }
}

export default Why;