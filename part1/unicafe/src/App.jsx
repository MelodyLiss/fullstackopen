import { useState } from 'react'
import React from 'react'


import './style.css'


const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div className='statistics-container'>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticsLine text='Good' value={good} />
          <StatisticsLine text='Neutral' value={neutral} />
          <StatisticsLine text='Bad' value={bad} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsPercentage = ({ good, bad, all }) => {

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <table className='statistics-percentage'>

      <tbody>
        <tr>
          <td>All</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positive}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>

      <div className='button-container'>
        <Button onClick={() => { setGood(good + 1); setAll(all + 1); }} text='good' />
        <Button onClick={() => { setNeutral(neutral + 1); setAll(all + 1); }} text='neutral' />
        <Button onClick={() => { setBad(bad + 1); setAll(all + 1); }} text='bad' />

      </div>

      {all > 0 && (
        <>
          <Statistics good={good} neutral={neutral} bad={bad} />
          <StatisticsPercentage good={good} bad={bad} all={all} />
        </>
      )}

      {all === 0 && (
        <p className='no-feedback'>No feedback given</p>
      )}




    </div>
  )
}

export default App
