import React from 'react'
import './Testimonials.css'
import {Carousel} from '../../components/Carousel/Carousel'

function Testimonials() {

    return (
        <div
            className="bg-[#282435] w-full h-auto flex flex-wrap flex-col  p-6 pb-30 lg:pb-30">
            <div className="flex flex-row items-center self-center justify-around">
                <img className="musicnote w-auto max-h-20 lg:max-h-20 mx-1" src={"/static/images/heart-clef.png"} alt={"music note"}/>
                <img className="music w-auto max-h-20  lg:max-h-20 mx-1"
                     src={"/static/images/music.png"} alt={"music note"}/>
                <img className="testimonial-title w-auto max-h-36 m-12"
                     src={"/static/images/testimonial-title.png"} alt={"testimonials"}/>
                <img className="music w-auto h-20  lg:max-h-20 mx-1"
                     src={"/static/images/music.png"} alt={"music note"}/>
                <img className="musicnote w-auto max-h-20  lg:max-h-20 mx-1" src={"/static/images/double-note.png"} alt={"music note"}/>
            </div>
            <div className="flex flex-row justify-center justify-items-center">
                <Carousel/>
            </div>
        </div>
    )
}

export default Testimonials