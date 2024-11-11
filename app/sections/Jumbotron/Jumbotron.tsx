"use client";
import React, { useEffect, useState } from 'react';
import './Jumbotron.css';
import Button from '../../components/Button/Button';


function Jumbotron() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const target = new Date("4/5/2025 9:00:00");

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
    <section className='jumbotron parent-container' id="home">
      <div className='jumboText-container flex flex-col items-center justify-center text-center'>
        <div className='jumbo-group'>
          <h4 className='jumbo-text text-[#FFE9D7] text-sm font-serif lg:text-lg'>WEHack Presents</h4>
          <h1 className='jumbo-title text-[#FFE9D7] text-9xl md:text-5xl lg:text-5xl animate-pulse'>WEHack 2025</h1>
          <h2 className='jumbo-text font-thin text-[#FFE9D7] text-l sm:text-9xl md:text-5xl lg:text-5xl'>COMING SOON</h2>
          <h3 className='jumbo-text font-extralight text-[#FFE9D7] text-sm sm:text-2xl md:2xl lg:text-3xl'>April 2025</h3>

                <div className='jumbo-buttons flex flex-col items-center'>
                  <Button link={'https://events.mlh.io/events/11456-wehack'} buttonText={'Interest Form'}/>
                  {/* <Button link={'https://live.wehackutd.com/'} buttonText={'WEHack Portal'}/> */}
                </div>

                {/* Countdown Timer Here */}

          <div className="countdown">
            <div className="circle-container large animate-pulse">
              <div className="circle bg-[rgba(255,233,215,0.68)]">
                <p>{days}</p>
              </div>
              <p className="label">Days</p>
            </div>
            <div className="circle-container medium animate-pulse">
              <div className="circle bg-[rgba(255,233,215,0.68)]">
                <p>{hours}</p>
              </div>
              <p className="label">Hours</p>
            </div>
            <div className="circle-container small animate-pulse">
              <div className="circle bg-[rgba(255,233,215,0.68)]">
                <p>{minutes}</p>
              </div>
              <p className="label">Minutes</p> 
            </div>
            <div className="circle-container smallest animate-pulse">
              <div className="circle bg-[rgba(255,233,215,0.68)]">
                <p>{seconds}</p>
              </div>
              <p className="label">Seconds</p>
            </div>

            <div>
              <img 
                className="wehack-stats-mascot h-auto w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem] scale-x-[-1]"  
                src={"/static/images/IMG_0843(2).png"} 
                alt="a bear trying to catch a butterfly" 
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;