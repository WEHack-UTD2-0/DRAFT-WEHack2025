import React from 'react';
import './Sponsor.css';

const sponsors = [
  { default: '/static/images/sponsors/cbre_gold.png', hover: '/static/images/sponsors/cbre_gold.png', tier: 'gold', link: 'https://www.cbre.com/' },
  { default: '/static/images/sponsors/verizon_gold.svg', hover: '/static/images/sponsors/verizon_gold.svg', tier: 'gold', link: 'https://www.verizon.com/' },
  { default: '/static/images/sponsors/bcbstx_silver.png', hover: '/static/images/sponsors/bcbstx_silver.png', tier: 'silver', link: 'https://www.hcsc.com/' },
  { default: '/static/images/sponsors/capital_one_silver.png', hover: '/static/images/sponsors/capital_one_silver.png', tier: 'silver', link: 'https://www.capitalone.com/' },
  { default: '/static/images/sponsors/jpmc_bronze.png', hover: '/static/images/sponsors/jpmc_bronze.png', tier: 'bronze', link: 'https://www.jpmorganchase.com/' },
  { default: '/static/images/sponsors/statefarm_bronze.png', hover: '/static/images/sponsors/statefarm_bronze.png', tier: 'bronze', link: 'https://www.statefarm.com/' },
  { default: '/static/images/sponsors/the_bridge_bronze.png', hover: '/static/images/sponsors/the_bridge_bronze.png', tier: 'bronze', link: 'https://www.thebridge.com/' },
  { default: '/static/images/sponsors/codepath_bronze.png', hover: '/static/images/sponsors/codepath_bronze.png', tier: 'bronze', link: 'https://www.codepath.org/' },
  { default: '/static/images/sponsors/axxess_bronze.png', hover: '/static/images/sponsors/axxess_bronze.png', tier: 'bronze', link: 'https://www.axxess.com/' },
  { default: '/static/images/sponsors/dfw_atw_bronze.png', hover: '/static/images/sponsors/dfw_atw_bronze.png', tier: 'bronze', link: 'https://www.dfwatw.org/' }
];

function Sponsor() {
    return (
      <div className='Sponsor-container bg-[#251E2B] w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-30 lg:pb-30' id="Sponsor">
        <div className="flex flex-row items-center justify-items-center justify-center">
                <img className="sponsor-title w-auto max-h-40 m-12" src={"/static/images/sponsors-title.png"} alt={"sponsors"}/>
        </div>

        {/*<div className="sponsor-text-container flex flex-wrap items-center justify-center">
        <p className='sponsor-text text-[#CCBA97] font-medium text-lg lg:text-xl'>Interested in sponsoring WEHack 2025? Contact us at wehackutd@gmail.com!</p>
        </div>
        <h1 className='Sponsor-title text-[#CCBA97] text-center text-4xl md:text-5xl lg:text-5xl pb-7 md:pb-15 md:pb-20'>2025 Sponsors</h1>*/}
        
        <div className='Sponsor-logos grid grid-cols-2 gap-6 w-full justify-items-center'>
          {sponsors.map((logo, index) => (
            <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`Sponsor-logo ${logo.tier}`}
            style={{ '--hover-image': `url(${logo.hover})` } as React.CSSProperties}
          >
              <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
          </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default Sponsor;