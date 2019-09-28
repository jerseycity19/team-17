import React from 'react';
import logo from '../ShatterproofLogo.png';
import Container from '@material-ui/core/Container';

const HomeButton = ({
    history
}) => {
    return (
        <div>
            <Container>
            <div className="Logo" onClick={()=>history.push('/')}>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            </Container>
        </div>
    )
}

export default HomeButton