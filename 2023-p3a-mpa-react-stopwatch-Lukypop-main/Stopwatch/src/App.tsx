import { useState } from 'react'
import Settings from './comps/Settings.tsx'
import Timer from './comps/Timer.tsx'
import './App.css'

function App() {
  const [time, setTime] = useState<number>(0)
  const [isStart, setIsStart] = useState<boolean>(false)


  

  return (
    <>
      { !isStart ? <Settings setTime={setTime} setIsStart={setIsStart}/> : <Timer time={time} setIsStart={setIsStart}/>}
    </>
  )
};
 
export default App
