import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const fries = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ]

  const [suraj, setSuraj] = useState(0)
  const [sunny, setSunny] = useState(new Array(fries.length).fill(0))

  const handleVotesClick = () => {
    const arr = [...sunny]
    arr[suraj] += 1
    setSunny(arr)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{fries[suraj]}</p>
      <p>has {sunny[suraj]} votes</p>

      <Button handleClick={handleVotesClick} text="vote" />
      <Button
        handleClick={() => {
          setSuraj(Math.floor(Math.random() * fries.length))
        }}
        text="next anecdote"
      />

      <h1>Anecdote with most votes</h1>
      <div>
        <p>{fries[sunny.indexOf(Math.max(...sunny))]}</p>
        <p>has {sunny[sunny.indexOf(Math.max(...sunny))]} votes</p>
      </div>
    </>
  )
}

export default App