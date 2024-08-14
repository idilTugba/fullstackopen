import Button from "./components/Button";
import {useState} from 'react';
import Statistics from "./components/Statistics";


const App = () => {
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  const HandleGoodCounter = (val)=> ()=>{
    setGoodCounter(val);
  }
  const HandlesetBadCounter = (val)=> ()=>{
    setBadCounter(val);
  }
   
  const HandleNeutralCounter = (val)=> ()=>{
    setNeutralCounter(val);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={HandleGoodCounter(goodCounter+1)} content="good"/>
      <Button onClick={HandleNeutralCounter(neutralCounter +1)} content="neutral"/>
      <Button onClick={HandlesetBadCounter(badCounter+1)} content="bad"/>
      <Statistics good={goodCounter} neutral={neutralCounter} bad={badCounter}/>
    </div>
  )
}

export default App