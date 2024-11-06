"use client";

import React, { useState, useEffect, useTransition } from 'react';
import './Team.css';


function Team() {
 const teamMembers = [
   { name: 'Clowie', role: 'Director', image: '/static/images/clowie.png' },
   { name: 'Mansi Patel', role: 'Experience Director', image: '/static/images/mansi.png' },   
   { name: 'Sisira Aarukapalli', role: 'Experience Coordinator', image: '/static/images/sisira.png' },
   { name: 'Maheen Ferdouse', role: 'Experience Coordinator', image: '/static/images/maheen.png' },
   { name: 'Megan Vu', role: 'Experience Coordinator', image: '/static/images/megan.png' },
   { name: 'Shivani Zala', role: 'Experience Coordinator', image: '/static/images/shivani.png' },
   { name: 'Pranavi Kanderi', role: 'Industry Director', image: '/static/images/pranavi.png' },
   { name: 'Sanjana Kotha', role: 'Industry Coordinator', image: '/static/images/sanjana.png' },
   { name: 'Sachita Chaliki', role: 'Industry Coordinator', image: '/static/images/sachita.png' },
   { name: 'Shreya Ram', role: 'Industry Coordinator', image: '/static/images/shreya.png' },
   { name: 'Elisa Paul', role: 'Industry Coordinator', image: '/static/images/elisa.png' },
   { name: 'Rita Kaushik', role: 'Marketing Directior', image: '/static/images/rita.png' },
   { name: 'Samridhi Ganguly', role: 'Marketing Coordinator', image: '/static/images/samridhi.png' },
   { name: 'Susan Zhang', role: 'Marketing Coordinator', image: '/static/images/susan.png' },
   { name: 'Zara Iqbal', role: 'Marketing Coordinator', image: '/static/images/zara.png' },
   { name: 'Kelly Trinh', role: 'Development Director', image: '/static/images/kelly.png' },
   { name: 'Clara Conner', role: 'Development Coordinator', image: '/static/images/clara.png' },
   { name: 'Safia Sharif', role: 'Development Coordinator', image: '/static/images/safia.png' },
   { name: 'Jaszmine DeFranco', role: 'Development Coordinator', image: '/static/images/jaszmine.png' },
   { name: 'Laasya Gudisa', role: 'Development Coordinator', image: '/static/images/laasya.png' },
   { name: 'Sneha Bista', role: 'Development Coordinator', image: '/static/images/sneha.png' },
   { name: 'Sajween Khan', role: 'Logistics Director', image: '/static/images/sajween.png' },
   { name: 'Rachana Mohan', role: 'Logistics Coordinator', image: '/static/images/rachana.png' },
   { name: 'Hemal Pathak', role: 'Logistics Coordinator', image: '/static/images/hemal.png' },
 ];

 const [startIndex, setStartIndex] = useState(0);
 const [visibleCount, setVisibleCount] = useState(10);
 const [isPending, startTransition] = useTransition();

 useEffect(() => {
   const handleResize = () => {
     if (window.innerWidth > 1200) {
       setVisibleCount(10);
     } else if (window.innerWidth > 900) {
       setVisibleCount(8);
     } else if (window.innerWidth > 600) {
       setVisibleCount(6);
     } else {
       setVisibleCount(4);
     }
   };

   handleResize();
   window.addEventListener('resize', handleResize);
   return () => window.removeEventListener('resize', handleResize);
 }, []);

 const handleNext = () => {
   startTransition(() => {
     setStartIndex((prevIndex) => 
       (prevIndex + 1) % teamMembers.length
     );
   });
 };

 const handlePrev = () => {
   startTransition(() => {
     setStartIndex((prevIndex) => 
       (prevIndex - 1 + teamMembers.length) % teamMembers.length
     );
   });
 };

 const visibleMembers = Array(visibleCount).fill(null).map((_, index) => {
   const memberIndex = (startIndex + index) % teamMembers.length;
   return teamMembers[memberIndex];
 });

 return (
   <div className='FAQ-container bg-[#755642] w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:pb-60' id="Team">
     <h1 className='team-title text-[#FFE9D7] text-center text-4xl md:text-5xl lg:text-5xl pb-7 md:pb-15 md:pb-20'>Meet the Team</h1>
     
     <div className="polaroid-container">
       {visibleMembers.map((member, index) => (
         <div 
           key={index} 
           className={`polaroid ${
             index === 0 || index === visibleCount - 1 ? 
               (isPending ? 'fade-out' : 'fade-in') : ''
           }`}
         >
           <img src={member.image} alt={member.name} className="polaroid-image" />
           <div className="polaroid-text">
             <h3 className="position-text font-bold">{member.name}</h3>
             <p className="role-text">{member.role}</p>
           </div>
         </div>
       ))}
     </div>
     <div className="flex justify-between mt-4 w-full max-w-6xl">
       <button onClick={handlePrev} className="nav-button bg-[#FFE9D7] text-[#755642] px-4 py-2 rounded">{'<'}</button>
       <button onClick={handleNext} className="nav-button bg-[#FFE9D7] text-[#755642] px-4 py-2 rounded">{'>'}</button>
     </div>
   </div>
 );
}

export default Team