import { useState } from "react"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const initialAnecdotesVoteList = new Array(anecdotes.length).fill(0);
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(initialAnecdotesVoteList);
  const [mostVote, setMostVote] = useState();

  const handleAnecdotes = (val) => () =>{ 
    const randomAnecdotes = Math.floor(Math.random() * val)
    setSelected(randomAnecdotes)
  }

  const handleVote = (val) => () => {
    const newList = [...vote];
    newList[val] +=1;
    setVote(newList)
    const mostV = Math.max(...newList);
    setMostVote(anecdotes[newList.indexOf(mostV)])
  }

  return (
    <div>
      <h1>Anecdotes of day</h1>
      <p>{anecdotes[selected]}</p>
      {vote[selected] ? <p>has {vote[selected]} vote</p> : <p>no vote yet</p>}
      <button onClick={handleVote(selected)}>Vote</button>
      <button onClick={handleAnecdotes(anecdotes.length)}>Next Anecdotes</button>
      {mostVote && (<><h1>Anecdotes with most vote</h1> <p>{mostVote}</p></>)}
    </div>
  )
}

export default App