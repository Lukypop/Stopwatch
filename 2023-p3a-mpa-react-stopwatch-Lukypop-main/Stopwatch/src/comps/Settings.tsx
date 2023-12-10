import React, { useEffect } from "react"
import {useState} from "react";
import styles from "./Settings.module.css"

interface ISettingsProps{
    setTime(value: number): void
    setIsStart(value: boolean): void
}

function selectTime({setTime, setIsStart}:ISettingsProps){
    const [inputTime, setInputTime] = useState(0);
    const [isCustom, setIsCustom] = useState(true)

    const handleTimeChange = (a: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(a.target.value, 10);
        if (value >= 5 && value <= 21600) {
            setInputTime(value);
        }
        else {setInputTime(0)}
    };

    const Enumelator = {
        OPTION0: "Vlastní",
        OPTION1: "Pětiminutovka",
        OPTION2: "Desetiminutovka",
        OPTION3: "Maturitní zkouška",
        OPTION4: "Hodinový test",
        OPTION5: "Dvouhodinový test",
        OPTION6: "Maturitní práce"
      };

    const [selectedOption, setSelectedOption] = useState(Enumelator.OPTION0);

    const handleChange = (a:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(a.target.value)
        
    }
    useEffect(()=>{
        if(selectedOption == Enumelator.OPTION0){setIsCustom(true)}

        else {setIsCustom(false)}
    }, [selectedOption])
    
    return(
        <div className={styles.container}>
            <p>Zvolte čas z nabídky</p>
            <div>
                <select className={styles.enumelator} value={selectedOption} onChange={handleChange}>
                    {Object.values(Enumelator).map((option) => (
                    <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            {isCustom ? <><input onChange={handleTimeChange} type="number" placeholder="  Počet sekund  "/></> : null} 
             <a className={styles.set }onClick={() => {if (selectedOption == Enumelator.OPTION0){if (Number(inputTime) >= 5 && Number(inputTime) <= 21600) 
                {setTime(Number(inputTime)); setIsStart(Boolean(true))}
                }
                else if (selectedOption == Enumelator.OPTION1) {setTime(5*60); setIsStart(Boolean(true))}
                else if (selectedOption == Enumelator.OPTION2) {setTime(10*60); setIsStart(Boolean(true))}
                else if (selectedOption == Enumelator.OPTION3) {setTime(15*60); setIsStart(Boolean(true))}
                else if (selectedOption == Enumelator.OPTION4) {setTime(40*60); setIsStart(Boolean(true))}
                else if (selectedOption == Enumelator.OPTION5) {setTime(85*60); setIsStart(Boolean(true))}               
                else if (selectedOption == Enumelator.OPTION6) {setTime(240*60); setIsStart(Boolean(true))}

                

                }}>Nastavit</a>
        </div>
    )
}

export default selectTime;