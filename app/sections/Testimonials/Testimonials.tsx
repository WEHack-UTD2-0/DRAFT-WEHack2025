import React from 'react'
import './Testimonials.css'
import {Carousel} from '../../components/Carousel/Carousel'

function Testimonials() {

    return (
        <div
            className="w-full h-auto flex flex-wrap flex-col self-center p-6 pb-40">
            {/* <div className="flex flex-row items-center self-center justify-around">
                <img className="musicnote w-auto max-h-20 lg:max-h-20 mx-1" src={"/static/images/heart-clef.png"} alt={"music note"}/>
                <img className="music w-auto max-h-20  lg:max-h-20 mx-1"
                     src={"/static/images/music.png"} alt={"music note"}/>
                <img className="testimonial-title w-auto max-h-36 m-12"
                     src={"/static/images/testimonial-title.png"} alt={"testimonials"}/>
                <img className="music w-auto h-20  lg:max-h-20 mx-1"
                     src={"/static/images/music.png"} alt={"music note"}/>
                <img className="musicnote w-auto max-h-20  lg:max-h-20 mx-1" src={"/static/images/double-note.png"} alt={"music note"}/>
            </div> */}
            <div className="title-container flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">
                    <div className="flex justify-start pb-5 -ml-64 md:-ml-0 md:pb-0">
                        <img className='musicnote h-auto max-w-36 md:w-auto lg:max-w-56 -rotate-[10deg] md:-rotate-0' src={"/static/images/Untitled design-8.png"} alt={"music note"}/>
                    </div>
                    
                    <div className="glow">
                        <h1 className='FAQ-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>Testimonials</h1>
                    </div>

                    <div className="flex justify-end pt-5 -mr-64 mt-3 md:mt-0 md:-mr-0 md:pt-0">
                        <img className='musicnote h-auto max-w-36 md:w-auto lg:max-w-56 rotate-[5deg] md:rotate-0' src={"/static/images/Untitled design-8.png"} alt={"music note"}/>
                    </div>
            </div>
            {/* <div className="testimonial-container flex flex-col md:flex-row items-center justify-center pb-12 md:pb-24 lg:pb-36 gap-x-20">      
                
                <img className='musicnote h-auto max-w-64 md:max-w-auto' src={"/static/images/Untitled design-8.png"} alt={"music note"}/>
                
                <div className="glow">
                    <h1 className='FAQ-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>Testimonials</h1>
                </div>
                <img className='musicnote h-auto max-w-64 md:max-w-auto' src={"/static/images/Untitled design-8.png"} alt={"music note"}/>
                
            </div> */}
            <div className="flex flex-row justify-center justify-items-center">
                <Carousel/>
            </div>
        </div>
    )
}

export default Testimonials