import React from 'react';
import Calendar from './Calendar.js';
import Container from '@material-ui/core/Container';

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
            <Container>
              <div className = "calendarWrapper"> 
              <Calendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime />
              </div>
            </Container>
        )
      }
}

export default Tracker;