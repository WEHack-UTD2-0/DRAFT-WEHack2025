"use client";

import React, { useState, useEffect, useTransition } from 'react';
import './Team.css';

function Team() {
 const teamMembers = [
   { name: 'Maheen Ferdouse', role: 'Co-Director', image: '/static/images/team/maheen.jpg' },
   { name: 'Mansi Patel', role: 'Co-Director', image: '/static/images/team/mansi.jpg' },   
   { name: 'Clowie Garcia', role: 'Advisor', image: '/static/images/team/clowie.jpg' },
   { name: 'Shivani Zala', role: 'Experience Director', image: '/static/images/team/shivani.jpg' },
   { name: 'Gayathri Jayaraman', role: 'Experience Coordinator', image: '/static/images/team/gayathri.jpg' },
//    { name: 'Timage Abubaker', role: 'Experience Coordinator', image: '/static/images/team/timage.jpg' },
   { name: 'Toby Estipona', role: 'Experience Coordinator', image: '/static/images/team/toby.jpg' },
   { name: 'Shreya Ram', role: 'Industry Director', image: '/static/images/team/shreya.jpg' },
   { name: 'Sanjana Kotha', role: 'Industry Coordinator', image: '/static/images/team/sanjana.jpg' },
   { name: 'Mariyam Zaki', role: 'Industry Coordinator', image: '/static/images/team/mariyam.jpg' },
   { name: 'Dharshini Mahesh', role: 'Industry Coordinator', image: '/static/images/team/dharshini.jpg' },
   { name: 'Elisa Paul', role: 'Industry Coordinator', image: '/static/images/team/elisa.jpg' },
   { name: 'Hemal Pathak', role: 'Logistics Director', image: '/static/images/team/hemal.jpg' },
   { name: 'Nivedha Sreenivasan', role: 'Logistics Coordinator', image: '/static/images/team/nivedha.jpg' },
   { name: 'Oviya Selvakumar', role: 'Logistics Coordinator', image: '/static/images/team/oviya.jpg' },
   { name: 'Shriya Rajesh', role: 'Logistics Coordinator', image: '/static/images/team/shriya.jpg' },
   { name: 'Sri Vellanki', role: 'Logistics Coordinator', image: '/static/images/team/sri.jpg' },
   { name: 'Rita Kaushik', role: 'Marketing Directior', image: '/static/images/team/rita.jpg' },
   { name: 'Faith Omoye', role: 'Marketing Coordinator', image: '/static/images/team/faith.jpg' },
   { name: 'Kanchan Javalkar', role: 'Marketing Coordinator', image: '/static/images/team/kanchan.jpg' },
   { name: 'Meghan Grayson', role: 'Marketing Coordinator', image: '/static/images/team/meghan.jpg' },
   { name: 'Nazihah Hossain', role: 'Marketing Coordinator', image: '/static/images/team/nazihah.jpg' },
   // Zara doesn't have a new photo yet
   // { name: 'Zara Iqbal', role: 'Marketing Coordinator', image: '/static/images/zara.jpg' },
   { name: 'Sneha Bista', role: 'Development Director', image: '/static/images/team/sneha.jpg' },
   { name: 'Annie Li', role: 'Development Coordinator', image: '/static/images/team/annie.jpg' },
   { name: 'Clara Conner', role: 'Development Coordinator', image: '/static/images/team/clara.jpg' },
   { name: 'Safia Sharif', role: 'Development Coordinator', image: '/static/images/team/safia.jpg' },
   { name: 'Zubiya Syeda', role: 'Development Coordinator', image: '/static/images/team/zubiya.jpg' },
 ];

 const [startIndex, setStartIndex] = useState(0);
 const [visibleCount, setVisibleCount] = useState(6); 
 const [isPending, startTransition] = useTransition();

 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 1300) {
        setVisibleCount(8); 
    } else if (window.innerWidth > 600) {
      setVisibleCount(6); 
    } else {
      setVisibleCount(6);
    }
  };

  handleResize(); 
  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 const handleNext = () => {
    startTransition(() => {
        setStartIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    });
 };

 const handlePrev = () => {
    startTransition(() => {
        setStartIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    });
 };

 // Create an array of visible members based on startIndex
 const visibleMembers = Array.from({ length: visibleCount }, (_, index) => {
    const memberIndex = (startIndex + index) % teamMembers.length;
    return teamMembers[memberIndex];
 });

 return (
  <div className='w-full h-auto flex flex-wrap flex-col items-center justify-center py-40 lg:px-32' id="Team">
    <div className="title-container flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">      
        <div className="glow-team">
            <h1 className='FAQ-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>Meet the Team</h1>
        </div>
    </div>
    <div className="polaroid-container">
      {visibleMembers.map((member, index) => (
        <div 
          key={index} 
          className={`polaroid ${isPending && index === 0 ? 'fade-out' : ''}`} // Apply fade-out only to the first item
        >
          <img src={member.image} alt={member.name} className="polaroid-image" loading="eager" />
          <div className="polaroid-text">
            <h3 className="position-text font-bold">{member.name}</h3>
            <p className="role-text">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center -mt-10 md:-mt-20 w-full max-w-6xl items-center">
      <img 
        src="/static/images/arrow-left.png" 
        alt="Previous" 
        onClick={handlePrev} 
        className="nav-button cursor-pointer" 
      />
      <img 
        src="/static/images/arrow-right.png" 
        alt="Next" 
        onClick={handleNext} 
        className="nav-button cursor-pointer" 
      />
    </div>
    
  </div>
 );
}

export default Team;