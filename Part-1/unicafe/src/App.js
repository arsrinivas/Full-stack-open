import { useState } from 'react'

const Button = ({texts, onClick}) => 
  <button onClick={onClick}>{texts}</button>

const StatisticsLines = ({texts, value}) => (
  <tr>
    <td>{texts}</td>
    <td>{value}</td>
  </tr>
)

const Strategy = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const positive = good / all * 100
  const average = (good - bad) / (good + bad + neutral)

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticsLines texts="good" value={good} />
          <StatisticsLines texts="neutral" value={neutral} />
          <StatisticsLines texts="bad" value={bad} />
          <StatisticsLines texts="all" value={good+neutral+bad} />
          <StatisticsLines texts="average" value={average} />
          <StatisticsLines texts="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button texts="good" onClick={() => setGood(good+1)} />
      <Button texts="neutral" onClick={() => setNeutral(neutral+1)} />
      <Button texts="bad" onClick={() => setBad(bad+1)} />

      <Strategy good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App