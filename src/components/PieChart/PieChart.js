import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const defaults = {
	labels: [
		'Losses',
		'Wins',
		'Ties'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'rgb(239, 69, 69)',
		'rgb(59, 214, 126)',
		'rgb(92, 152, 249)'
		],
		hoverBackgroundColor: [
		'rgba(239, 69, 69, .7)',
		'rgba(59, 214, 126, .7)',
		'rgba(92, 152, 249, .7)'
		]
	}]
}

const options = {
  legend: {
    display: false
  }
}

export const PieChart = props => {
  const data = {
    ...defaults,
    datasets: [{
      ...defaults.datasets[0],
      data: props.data || [1, 2, 3] // [losses, wins, ties]
    }]
  }
  return(
    <Doughnut data={data} options={options}/>
  );
}