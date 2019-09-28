import React from 'react';
import Calendar from './Calendar.js';
import Container from '@material-ui/core/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Grid from '@material-ui/core/Grid';
import { teal } from '@material-ui/core/colors';

const ColoredLine = () => (
  <hr
      style = {{
          color: teal[300],
          backgroundColor: teal[300],
          height: 5
      }}
  />
)

class Tracker extends React.Component {
    constructor(props) {
        super(props)
        const date = new Date()
        const startDate = date.getTime()
        this.state = {
          startDate, // Today
          endDate: new Date(startDate).setDate(date.getDate() + 6) // Today + 6 days
        }
      }
    
      onChange = (startDate, endDate) => this.setState({ startDate, endDate })
    
      render = () => {
        const { startDate, endDate } = this.state
    
        return (
          <div>
            {/* <Container>
              <div className = "calendarWrapper"> 
              <div className="CalTitle">
                <p> <strong>TRACK YOUR VICTORIES </strong></p>
              </div>
              <div className="TrackerInfo">
                <p> Use this calendar to track your days without use! </p>
              </div>
              <br></br>
              <Calendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime />
              </div>
            </Container>
            <Container>
              <ProgressBar striped variant="info" now={20} />
            </Container> */}
            <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div className = "calendarWrapper"> 
                    <div className="CalTitle">
                      <p> <strong>TRACK YOUR VICTORIES </strong></p>
                    </div>
                    <div className="TrackerInfo">
                      <p> Use this calendar to track your days without use! </p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div align="center">
                      <br/>
                      <br/>
                      <br/>
                      <ColoredLine />
                  </div>
                  <div className = "calendarWrapper"> 
                    <p> I HAVE BEEN WITHOUT SUBSTANCE USE FOR </p>
                    <p> <strong> 5 DAYS </strong></p>
                  </div>
                  <div align="center">
                      <ColoredLine />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className = "calendarWrapper"> 
                    <Calendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                <div align="center">
                      <br/>
                      <br/>
                      <br/>
                      <ColoredLine />
                  </div>
                <div className = "calendarWrapper"> 
                    <p> I AM </p>
                    <p> <strong> #STRONGER THAN ADDICTION </strong></p>
                  </div>
                  <div align="center">
                      <ColoredLine />
                  </div>
                </Grid>
                <Grid item xs={12}>
                    <br/>
                    <ProgressBar striped variant="warning" now={40} />
                    <br/>
                </Grid>
            </Grid>
          </div>
        )
      }
}

export default Tracker;