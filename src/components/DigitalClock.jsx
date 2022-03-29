import React, { useEffect, useState } from "react";

const date = new Date();

export default function DigitalClock() {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="digital-clock very-large-text reverse-fancy-text force-center">
            <div>
                {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
            </div>
        </div>
    );
}
