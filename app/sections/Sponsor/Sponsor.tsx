import React from 'react';
import './Sponsor.css';

const sponsors = [
  { default: '/static/images/sample_sponsors/statefarm_logo_brown.png', hover: '/static/images/sample_sponsors/statefarm_logo.png' },
  { default: '/static/images/sample_sponsors/jpmorgan_logo_brown.png', hover: '/static/images/sample_sponsors/jpmorgan_logo.png' },
  { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png' },
  { default: '/static/images/sample_sponsors/statefarm_logo_brown.png', hover: '/static/images/sample_sponsors/statefarm_logo.png' },
  { default: '/static/images/sample_sponsors/jpmorgan_logo_brown.png', hover: '/static/images/sample_sponsors/jpmorgan_logo.png' },
  { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png' }
];

function Sponsor() {
    return (
      <div className='Sponsor-container w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:pb-60' id="Sponsor">
        <h1 className='Sponsor-title text-[#FFE9D7] text-center text-4xl md:text-5xl lg:text-5xl pb-7 md:pb-15 md:pb-20'>2025 Sponsors</h1>
        <div className='Sponsor-logos flex flex-wrap justify-around w-full'>
          {sponsors.map((logo, index) => (
            <div key={index} className='Sponsor-logo bg-[#FFE9D7] rounded-lg flex items-center justify-center' style={{ '--hover-image': `url(${logo.hover})` } as React.CSSProperties}>
              <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
            </div>
          ))}
        </div>
        <div className="vinyl-yellow-container flex justify-center md:justify-start pt-20 pb-72 md:pt-30 md:pb-64 md:-mr-[5rem] lg:-mr-[20rem] xl:-mr-[35rem]">
          <img className="vinyl-yellow" src="/static/images/Untitled_Artwork 5.png" width="350px" height="350px"></img>    
        </div>
      </div>
    );
  }
  
  export default Sponsor;