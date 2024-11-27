import React from 'react'
import './About.css'
import Stats from '@/app/components/Stats/Stats'

function About() {
  return (
    <section className='parent-container about-section bg-[#251E2B]' id="about-wehack">
      <div className='about-title flex justify-center items-center'>
        <img src={"/static/images/about-title.png"} alt={"Dallas' Largest Inclusive Hackathon"} />
      </div>
      <div className='about-text-container flex flex-col items-center justify-center gap-y-5'>
        <p className='about-text text-[#CCBA97] font-medium text-lg lg:text-xl'>The purpose of WEHack is to create an inclusive and encouraging environment for women, nonbinary genders, and all underrepresented groups in technology so that they can gain the skills and confidence to excel in future hackathons and the tech world.</p>
        <p className='about-text text-[#CCBA97] font-medium text-lg lg:text-xl'>We aim to encourage more underrepresented individuals to harness their skills by creating software or hardware projects of their own. Whether it's networking with sponsors and hackers, gaining development and workshop experience, or competing against other teams for challenges and prizes, WEHack offers participants an opportunity to end the weekend with unique takeaways.</p>
      </div>
 
      {/* film strip */}
      <div className="film-strip-container">
        <img src="/static/images/about-film-strip-photos.png" className="film-strip" />
        {/*<div className="scrolling-images">
          <img src="/static/images/IMG_0165.jpg" alt="a group of people at a sponsor fair" loading="eager" />
          <img src="/static/images/IMG_1752.jpg" alt="two girls smiling at the camera, holding a WEHack tote bag" loading="eager" />
          <img src="/static/images/IMG_0165.jpg" alt="a group of people at a sponsor fair" loading="eager" />
        </div>
        */}
        </div>

      {/* stats */}
      {/* <Stats/> */}
    </section>
  )
}

export default About