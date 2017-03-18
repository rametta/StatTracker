import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class StatChart extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'K/D Ratio',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(92, 152, 249, .6)',
            borderColor: 'rgb(92, 152, 249)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(92, 152, 249)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(92, 152, 249)',
            pointHoverBorderColor: 'rgb(92, 152, 249)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    }

    setTimeout(() => this.setState(
      { 
        data: { 
          ...this.state.data, 
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [ 
            { 
              ...this.state.data.datasets[0],
              data: [65, 59, 80, 81, 56, 55, 40, 56, 45, 23]
            } 
          ] 
        } 
      }
    ), 4000)

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return <Line data={this.state.data} />;
  }
}
