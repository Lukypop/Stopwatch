import React from "react"
import {useState, useEffect} from "react";
import styles from "./Timer.module.css"

interface ITimerProps {
    time: number
    setIsStart(value: boolean):void
    
}

function Timer({time, setIsStart}:ITimerProps){
    const [seconds, setSeconds] = useState(time)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
        if (seconds == 0) {
            setIsStart(false)
        }

            if (isRunning) {
                if (seconds > 0) {
                    const interval = setInterval(() => {
                        setSeconds(seconds - 1)
                    }, 1000)
            
                    return () => clearInterval(interval)
                }
            }
        
        
      }, [seconds, isRunning])
    
    const sixtyFormat = (seconds: number) => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
        return `${hours}:
        ${minutes}:${remainingSeconds}`;
      };
    const handleRunChange =()=>{
        if (isRunning){setIsRunning(false)}
        else {setIsRunning(true)}
    }



      const procenta = ((time - seconds) / time) * 100;
    return(
        <>

            <div className={`${styles.time} ${seconds <= 10 ? styles.red : ''}`}>{sixtyFormat(seconds)}</div>

            <div>
                <progress className={styles.progress} value={procenta} max={100}></progress>
            </div>
            <div className={styles.button__flex}>
                <a className={styles.button} onClick={()=>{handleRunChange()}}>{isRunning? 'zastavit' : 'spustit'}</a>
                <a className={styles.button} onClick={()=>{setIsStart(false)}}>reset</a>
            </div>
 

        </>
    )
}
export default Timer;