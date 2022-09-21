import React, { useEffect, useState } from 'react'
import "./Timer.css"

const Timer = () => {

    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(2);

    var timer;

    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                if (seconds > 0 && minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
                else {
                    setMinutes(0);
                    setSeconds(0);
                }
            }



        }, 1000)

        return () => clearInterval(timer);
    }, [seconds])

    const stop=()=>{
        clearInterval(timer);
    }

    const restart =()=>{
        setMinutes(2);
        setSeconds(59);
    }

    return (
        <div className='timer'>
            <div className='container'>
                <div className='timer_container'>
                    <h1>Timer</h1>
                    <h1>{minutes < 10 ? "0" + minutes : minutes}:
                        {seconds < 10 ? "0" + seconds : seconds}</h1>

                </div>
                <button className='restart' onClick={restart}> Restart</button>
                <button className='stop' onClick={stop}> Stop</button>
            </div>
        </div>
    )
}

export default Timer