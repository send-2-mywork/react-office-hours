require('react-datepicker/dist/react-datepicker.css');
import DatePicker from 'react-datepicker';

import moment from 'moment';
import React from 'react';

import BikeChart from './bike-chart';


const App = React.createClass({

  getInitialState() {
    return {
      fromDate: moment().subtract(1, 'year').subtract(7, 'days'),
      toDate: moment().subtract(1, 'year')
    }
  },

  onFromDateChanged(date) {
    this.setState({
      fromDate: date
    });
  },

  onToDateChanged(date) {
    this.setState({
      toDate: date
    });
  },

  render() {
    return (
      <div>
        <h1>Fremont Bicycle Traffic</h1>

        <DatePicker
          selected={this.state.fromDate}
          onChange={this.onFromDateChanged} />

        <DatePicker
          selected={this.state.toDate}
          onChange={this.onToDateChanged} />

        <BikeChart fromDate={this.state.fromDate} toDate={this.state.toDate} />
      </div>
    );
  }
});

export default App;
