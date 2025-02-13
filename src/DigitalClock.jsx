import { useState, useEffect } from 'react'

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());
    const [is24Hour, setIs24Hour] = useState(true); // true means 24h format

    useEffect(() => {
        // An interval that updates the time state every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        // Cleanup the interval
        return () => {
            clearInterval(intervalId);
        }
    }, [])  // This effect runs once after the initial render

    // Function to toggle the clock format between 24-hour and 12-hour
    const toggleClockFormat = () => {
        setIs24Hour((prevFormat) => !prevFormat);
    };

    return(
        <div className="clock-container">
            <div className="clock">
                <span>
                    {time.toLocaleTimeString("en-US", { hour12: !is24Hour })}
                </span>
            </div>

            <button onClick={toggleClockFormat}>
                {is24Hour ? "Switch to 12h" : "Switch to 24h"}
            </button>
        </div>
    );
}