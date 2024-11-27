"use client";
import React, { useEffect, useState } from 'react'
import '../../sections/Jumbotron/Jumbotron.css'; // Import the Jumbotron CSS
import Button from '../../components/Button/Button'

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const target = new Date("4/5/2025 23:59:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [target]);


  return (
    <section className='timer-container flex justify-center'>
      <div className="timer-group pt-10 -mt-20 pb-24 md:-mt-20 md:pb-32">
        <div className="countdown">
          <div className="circle-container large">
                <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse">
                  <p>{days}</p>
                </div>
                <p className="label">Days</p>
              </div>
              <div className="circle-container medium">
                <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse [animation-delay:500ms]">
                  <p>{hours}</p>
                </div>
                <p className="label">Hours</p>
              </div>
              <div className="circle-container small">
                <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse [animation-delay:300ms]">
                  <p>{minutes}</p>
                </div>
                <p className="label">Minutes</p>
              </div>
              <div className="circle-container smallest">
                <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse [animation-delay:1500ms]">
                  <p>{seconds}</p>
                </div>
                <p className="label">Seconds</p>
              </div>

            <div>
              <img 
                className="wehack-stats-mascot h-auto w-[9rem] translate-y-20 sm:w-[10rem] md:w-[12rem] lg:w-[14rem] scale-x-[-1]"  
                src={"/static/images/Raccoon_Popcorn.png"} 
                alt="a raccoon trying eating popcorn" 
                loading="eager"
              />
            </div>
          </div>
    </section>
  );
}

export default Countdown;