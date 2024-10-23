"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './Team.css';

function Team() {
  const teamMembers = [
    { name: 'Clowie', role: 'Director', image: '/static/images/clowie.png' },
    { name: 'Kelly Trinh', role: 'Development Director', image: '/static/images/kelly.png' },
    { name: 'Rita Kaushik', role: 'Marketing Directior', image: '/static/images/rita.png' },
    { name: 'Mansi Patel', role: 'Experience Director', image: 'path/to/image.jpg' },
    { name: 'Pranavi Kanderi', role: 'Industry Director', image: '/static/images/pranavi.png' },
    { name: 'Sajween Khan', role: 'Logistics Director', image: 'path/to/image.jpg' },
    { name: 'Sneha Bista', role: 'Development Coordinator', image: 'path/to/image.jpg' },
    { name: 'Clara Conner', role: 'Development Coordinator', image: 'path/to/image.jpg' },
    { name: 'Safia Sharif', role: 'Development Coordinator', image: 'path/to/image.jpg' },
    { name: 'Jaszmine DeFranco', role: 'Development Coordinator', image: 'path/to/image.jpg' },
    { name: 'Laasya Gudisa', role: 'Development Coordinator', image: 'path/to/image.jpg' },
    { name: 'Samridhi Ganguly', role: 'Marketing Coordinator', image: 'path/to/image.jpg' },
    { name: 'Susan Zhang', role: 'Marketing Coordinator', image: 'path/to/image.jpg' },
    { name: 'Zara Iqbal', role: 'Marketing Coordinator', image: 'path/to/image.jpg' },
    { name: 'Sisira Aarukapalli', role: 'Experience Coordinator', image: 'path/to/image.jpg' },
    { name: 'Maheen Ferdouse', role: 'Experience Coordinator', image: 'path/to/image.jpg' },
    { name: 'Megan Vu', role: 'Experience Coordinator', image: 'path/to/image.jpg' },
    { name: 'Shivani Zala', role: 'Experience Coordinator', image: 'path/to/image.jpg' },
    { name: 'Sanjana Kotha', role: 'Industry Coordinator', image: 'path/to/image.jpg' },
    { name: 'Sachita Chaliki', role: 'Industry Coordinator', image: 'path/to/image.jpg' },
    { name: 'Shreya Ram', role: 'Industry Coordinator', image: 'path/to/image.jpg' },
    { name: 'Elisa Paul', role: 'Industry Coordinator', image: 'path/to/image.jpg' },
    { name: 'Rachana Mohan', role: 'Logistics Coordinator', image: 'path/to/image.jpg' },
    { name: 'Lasya Nagisetty', role: 'Logistics Coordinator', image: 'path/to/image.jpg' },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const photosPerSet = 6;
  const totalSets = Math.ceil(teamMembers.length / photosPerSet);

  const handleNext = () => {
    setCurrentSet(prev => (prev + 1) % totalSets);
  };

  const handlePrev = () => {
    setCurrentSet(prev => (prev - 1 + totalSets) % totalSets);
  };

  const currentPhotos = teamMembers.slice(currentSet * photosPerSet, (currentSet + 1) * photosPerSet);

  return (
    <div className='FAQ-container bg-[#755642] w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:pb-60' id="Team">
      <h1 className='team-title text-[#FFE9D7] text-center text-4xl md:text-5xl lg:text-5xl pb-7 md:pb-15 md:pb-20'>Meet the Team</h1>
      
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {currentPhotos.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} className="bg-[#FFE9D7] text-[#755642] px-4 py-2 rounded">Prev</button>
          <button onClick={handleNext} className="bg-[#FFE9D7] text-[#755642] px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Team;