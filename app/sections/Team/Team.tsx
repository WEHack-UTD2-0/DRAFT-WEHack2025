"use client";

import React, { useState, useEffect, useTransition } from 'react';
import './Team.css';

function Team() {
 const teamMembers = [
   { name: 'Maheen Ferdouse', role: 'Co-Director', image: '/static/images/maheen.jpg' },
   { name: 'Mansi Patel', role: 'Co-Director', image: '/static/images/mansi.jpg' },   
   { name: 'Clowie Garcia', role: 'Advisor', image: '/static/images/clowie.jpg' },
   { name: 'Shivani Zala', role: 'Experience Director', image: '/static/images/shivani.jpg' },
   { name: 'Gayathri Jayaraman', role: 'Experience Coordinator', image: '/static/images/gayathri.jpg' },
   { name: 'Timage Abubaker', role: 'Experience Coordinator', image: '/static/images/timage.jpg' },
   { name: 'Toby Estipona', role: 'Experience Coordinator', image: '/static/images/toby.jpg' },
   { name: 'Shreya Ram', role: 'Industry Director', image: '/static/images/shreya.jpg' },
   { name: 'Sanjana Kotha', role: 'Industry Coordinator', image: '/static/images/sanjana.jpg' },
   { name: 'Mariyam Zaki', role: 'Industry Coordinator', image: '/static/images/mariyam.jpg' },
   { name: 'Dharshini Mahesh', role: 'Industry Coordinator', image: '/static/images/dharshini.jpg' },
   { name: 'Elisa Paul', role: 'Industry Coordinator', image: '/static/images/elisa.jpg' },
   { name: 'Hemal Pathak', role: 'Logistics Director', image: '/static/images/hemal.jpg' },
   { name: 'Nivedha Sreenivasan', role: 'Logistics Coordinator', image: '/static/images/nivedha.jpg' },
   { name: 'Oviya Selvakumar', role: 'Logistics Coordinator', image: '/static/images/oviya.jpg' },
   { name: 'Shriya Rajesh', role: 'Logistics Coordinator', image: '/static/images/shriya.jpg' },
   { name: 'Sri Vellanki', role: 'Logistics Coordinator', image: '/static/images/sri.jpg' },
   { name: 'Rita Kaushik', role: 'Marketing Directior', image: '/static/images/rita.jpg' },
   { name: 'Faith Omoye', role: 'Marketing Coordinator', image: '/static/images/faith.jpg' },
   { name: 'Kanchan Javalkar', role: 'Marketing Coordinator', image: '/static/images/kanchan.jpg' },
   { name: 'Meghan Grayson', role: 'Marketing Coordinator', image: '/static/images/meghan.jpg' },
   { name: 'Nazihah Hossain', role: 'Marketing Coordinator', image: '/static/images/nazihah.jpg' },
   // Zara doesn't have a new photo yet
   // { name: 'Zara Iqbal', role: 'Marketing Coordinator', image: '/static/images/zara.jpg' },
   { name: 'Sneha Bista', role: 'Development Director', image: '/static/images/sneha.jpg' },
   { name: 'Annie Li', role: 'Development Coordinator', image: '/static/images/annie.jpg' },
   { name: 'Clara Conner', role: 'Development Coordinator', image: '/static/images/clara.jpg' },
   { name: 'Safia Sharif', role: 'Development Coordinator', image: '/static/images/safia.jpg' },
   { name: 'Zubiya Syeda', role: 'Development Coordinator', image: '/static/images/zubiya.jpg' },
 ];

 const [startIndex, setStartIndex] = useState(0);
 const [visibleCount, setVisibleCount] = useState(6); 
 const [isPending, startTransition] = useTransition();

 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 1200) {
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
  <div className='FAQ-container bg-[#251E2B] w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:p-60' id="Team">
    <img 
      src={'/static/images/team-title.png'}
      alt="Meet the Team" 
      className='team-title text-[#FFE9D7] text-center pb-7 md:p-15 md:p-20'
    />
    <div className="polaroid-container">
      {visibleMembers.map((member, index) => (
        <div 
          key={index} 
          className={`polaroid ${isPending && index === 0 ? 'fade-out' : ''}`} // Apply fade-out only to the first item
        >
          <img src={member.image} alt={member.name} className="polaroid-image" loading="lazy" />
          <div className="polaroid-text">
            <h3 className="position-text font-bold">{member.name}</h3>
            <p className="role-text">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-4 w-full max-w-6xl">
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