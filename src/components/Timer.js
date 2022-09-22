import React, { useEffect, useState } from 'react'
import "./Timer.css"

const Timer = () => {

    const [isStart,setIsStart]=useState(true);
    const [isContinue,setIsContinue]=useState(false);
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(2);
    const [startTimer, setStartTImer] = useState(false);
   

    useEffect(() => {
      let  timer = null;
        if (startTimer) {
            timer = setTimeout(() => {
                setSeconds(seconds- 1);
                if (seconds === 0) {
                    if (seconds === 0 && minutes > 0) {
                        setMinutes(minutes- 1);
                        setSeconds(59);
                    }
                    else {
                        setMinutes(0);
                        setSeconds(0);
                    }
                }

            

            }, 1000)}
            return ()=>clearTimeout(timer);
    })

    const reset = () => {
        setIsStart(true);
        setIsContinue(false);
        setStartTImer(false);
        setMinutes(2);
        setSeconds(59);

    }



    return (
        <div className='timer'>
            <div className='container'>
                <div className='timer_container'>
                    <h1>Timer</h1>

                    <input className='time_input' value={minutes}
                        onChange={(e) => setMinutes(e.target.value)} />

                    <input className='time_input' value={seconds}
                        onChange={(e) => setSeconds(e.target.value)} />


                </div>
                <button className={isStart?"start":"start-disable"} 
                 onClick={() => [setStartTImer(true),setIsStart(false),setIsContinue(true)]}> Start</button>
                <button className='pause' onClick={() => setStartTImer(false)}> Pause</button>
                <button className={isContinue?"continue":"continue-disable"} 
                onClick={() => setStartTImer(true)}> Continue</button>
                <button className='reset' onClick={reset}> Reset</button>
            </div>
        </div>
    )
}

export default Timer