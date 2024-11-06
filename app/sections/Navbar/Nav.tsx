"use client"
import React from 'react'
import './Nav.css'
 
function Nav() {

    if (typeof window !== "undefined") {
        var prevScrollpos = window.scrollY;
        window.onscroll = function() {
            const currentScrollPos = window.scrollY;
            if (prevScrollpos >= currentScrollPos) {
                // @ts-ignore
                document.getElementById("nav").style.top = "0";
            } else {
                // @ts-ignore
                document.getElementById("nav").style.top = "-5rem";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    return (
        <nav id="nav">

            <img className="wehack-logo h-14 w-14 " src={"/static/images/LogoSparkle.png"}
                 alt="wehack logo"></img>

            <input type="checkbox" id="checkbox_toggle"/>
            <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                <ul className="collapse-menu">
                    <div>
                        <li><a className='text-lg lg:text-base' href="#about-wehack">About</a></li>
                        <li><a className='text-lg lg:text-base' href="#FAQ">FAQ</a></li>
                        <li><a className='text-lg lg:text-base' href="http://hackp.ac/coc" target="_blank">MLH Conduct</a></li>
                    </div>
                    <div>
                        <li><a className='text-lg lg:text-base' href="#about-wehack">Sign Up</a></li>
                        <li><a className='text-lg lg:text-base' href="#FAQ">Log in</a></li>
                    </div>
                </ul>

            {/* MLH 2025 BADGE */}
            <a className="mlh-trust-badge"
               href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
               target="_blank"><img src={"/static/images/mlh-trust-badge-2025-white.svg"}
                                    alt="Major League Hacking 2025 Hackathon Season"/></a>
        </nav>
    )
}

export default Nav