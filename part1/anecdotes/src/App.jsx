import { useState, useEffect } from 'react'
import './style.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)

  useEffect(() => {
    setMostVoted(votes.indexOf(Math.max(...votes)))
  }, [votes])

  return (
    <div className='anecdote-container'>
      {anecdotes[selected]}

      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>

      <button className='vote-button' onClick={() => setVotes(votes.map((vote, index) => index === selected ? vote + 1 : vote))}>vote</button>

      <p>has {votes[selected]} votes</p>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  )
}

export default App