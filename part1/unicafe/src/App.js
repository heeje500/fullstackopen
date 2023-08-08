import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
  // return <div>{props.text} {props.value}</div>
}

const Statistics = (props) => {

  if (props.good + props.neutral + props.bad === 0) {
    return <p> No Feedback Given </p> 
  }

  const total = props.good + props.bad + props.neutral


  return (
    <div>
    <h2>Statistics</h2>


    <StatisticLine text = 'good' value = {props.good}/> 
    <StatisticLine text = 'neutral' value =  {props.neutral}/>
    <StatisticLine text = 'bad' value = {props.bad}/> 
    <StatisticLine text = 'all' value = {total}/>
    <StatisticLine text = 'average' value = {(props.good - props.bad)/ total}/>
    <StatisticLine text = 'positive' value ={(props.good / total) * 100 + '%'}/>
    </div>
  )


  }
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //const Increment = (state, setState) => () => setState(state +)
  return (
    <div>
      <h2> give feedback</h2>
      <button onClick={() => setGood(good+1)}>
        good
      </button>
      <button onClick = {() => setNeutral(neutral+1)}>
        neutral
      </button>
      <button onClick = {() => setBad(bad+1)}>
        bad
      </button>
      <Statistics good ={good} neutral = {neutral} bad = {bad}> </Statistics>
    </div>
  )
}

export default App