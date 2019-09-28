import React from 'react';
import './Stigma.css';
import FormContainer from '../components/FormContainer.js';
import Container from '@material-ui/core/Container';

class Stigma extends React.Component {
    render() {
        return (
            <div >
                <Container>
                    <div className="Title2">
                        <p> SHATTER STIGMA. WORDS MATTER.</p>
                    </div>
                    <div className="Info">
                        <p> Substance use disorder is is a chronic brain disease that can be managed with medical treatment.
                        <br />
                        <strong>It is NOT a moral failing or a character flaw.</strong>
                        <br />
                        <br/> But still, <strong>only 1 in 10 Americans with a substance use disorder receive treatment.</strong>
                        <br /> The stigma is a major reason more people are not receiving the help that they need.
                        <br/>
                        <br/>
                        </p>
                    </div>

                    <div className="Bullets">
                        <p> <u1 class="a"> 
                        <li> I will avoid negative terms like junkie, user, and abuser.  </li>
                        </u1>
                        <li> I will call it what it is: Substance Use Disorder.</li>
                        <li> I will avoid the word "relapsed," and instead say "suffered a setback."</li>
                        </p>
                    </div>

                    <div className="Title2">
                        <p> TAKE THE PLEDGE TO END STIGMA NOW.</p>
                    </div>

                    <br/>
                    <br/>
                    <FormContainer />
                </Container>
            </div>
        );
    }
}

export default Stigma;