import React from 'react';
import Calendar from './Calendar.js';

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
            <Calendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime />
        )
      }
}

export default Tracker;