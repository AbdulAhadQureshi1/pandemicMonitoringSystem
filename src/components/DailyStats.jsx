import React, {useContext} from 'react'
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import {ThemeContext} from './themeContext.jsx'

Chart.register(ArcElement);

export default function DailyStats() {

  const darkMode = useContext(ThemeContext);

  function themeColorSwitch() {
    return darkMode ? 'dark-enabled' : 'light-enabled'
  }

  const totalPatients = 1000;
  const totalDeceased = 400;
  const totalRecovered = 650;
  const totalRegistered = 700;

  const deceasedPercentange = (totalDeceased/totalPatients)*100;
  const recoveredPercentage = (totalRecovered/totalPatients)*100;
  const registeredPercentage = (totalRegistered/totalPatients)*100;

  const dataDeceased = {
    labels: [
      'Red',
      'white'
    ],
    datasets: [{
      label: 'Hello world',
      data: [deceasedPercentange, 100-deceasedPercentange],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgba(255, 255, 255, 0)'
      ],
      borderColor: 'rgba(0,0,0,0)',
      hoverOffset: 4
    }]
  };
  const dataRegistered = {
    labels: [
      'Red',
      'white'
    ],
    datasets: [{
      label: 'Hello world',
      data: [registeredPercentage, 100-registeredPercentage],
      backgroundColor: [
        'rgb(255, 205, 86)',
        'rgba(255, 255, 255, 0)'
      ],
      borderColor: 'rgba(0,0,0,0)',
      hoverOffset: 4
    }]
  };
  const dataRecovered = {
    labels: [
      'Red',
      'white'
    ],
    datasets: [{
      label: 'Hello world',
      data: [recoveredPercentage, 100-recoveredPercentage],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgba(255, 255, 255, 0)'
      ],
      borderColor: 'rgba(0,0,0,0)',
      hoverOffset: 4
    }]
  };


  return (
    <div className={`daily-stats flex ${themeColorSwitch()}`}>
      <h1 className={`daily-stats-heading font`}>Today's Statistics</h1>
      <div className='graphs flex'>
        <div className={`graph graph-1 flex`}>
          <Doughnut datasetIdKey='daily-recoveries' data={dataRecovered} />
          <label className='meter font'>{`${recoveredPercentage}%`}</label>
          <label className='graph-label font'>Number of recoveries</label>
        </div>  
        <div className={`graph graph-2 flex`}>
          <Doughnut datasetIdKey='daily-registered' data={dataRegistered} />
          <label className='meter font'>{`${registeredPercentage}%`}</label>
          <label className='graph-label font'>Number of new registrations</label>
        </div>  
        <div className={`graph graph-3 flex`}>
          <Doughnut datasetIdKey='daily-deceased' data={dataDeceased} />
          <label className='meter font'>{`${deceasedPercentange}%`}</label>
          <label className='graph-label font'>Number of deceased</label>
        </div>  
      </div>
    </div>
  )
}
