import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0);

  // let counter = 0;

  // let addValue = () => {
  //   if(counter+1 > 20) return;
  //   setcounter(prevCounter => prevCounter + 1);
  // }

  // let removeValue = () => {
  //   if(counter-1 < 0) return;
  //   setcounter(counter-1);
  // }

  return (
    <>
      <h1>My Counter {counter}</h1>
      <h2>counter : {counter}</h2>
      <button onClick={() => setcounter(counter+1)}>Increase value {counter}</button>
      <br />
      <button onClick={() => setcounter(counter-1)}>Decrease value {counter}</button>

    </>
  )
}

export default App
