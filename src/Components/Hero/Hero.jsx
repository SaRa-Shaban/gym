import React from 'react'
import Header from '../Header/Header'
import './Hero.css';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from "number-counter"




export default function Hero() {

    const transition = { type: 'spring', duration: 3 }
    const mobile =window.innerWidth <= 768 ? true : false ;

    return (
        <>

            <div className="hero" id='home'>
                <div className="blur blurHero"></div>
                <div className="leftHero">

                    {/* header */}
                    <Header />

                    {/* bestAd */}
                    <div className="bestAd">

                        {/* motion */}
                        <motion.div
                            initial={{ left: mobile ? '165px' : '238px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}
                        ></motion.div>

                        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                    </div>

                    {/* heading */}
                    <div className="heading">
                        <div>
                            <span className='strokeText'>SHAPE</span>
                            <span> YOUR </span>
                        </div>
                        <div>
                            <span>IDEAL BODY</span>
                        </div>
                        <div>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </div>
                    </div>

                    {/* figures */}
                    <div className="figures">

                        <div>
                            <span>
                                <NumberCounter end={140} start={100} delay="5" preFix="+"/>
                            </span>
                            <span>EXPERT COACHES</span>
                        </div>
                        <div>
                            <span><NumberCounter end={978} start={800} delay="5" preFix="+"/></span>
                            <span>EXPERT COACHES</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter end={50} start={0} delay="5" preFix="+"/>
                            </span>
                            <span>EXPERT COACHES</span>
                        </div>
                    </div>

                    {/* button */}
                    <div className='buttons'>
                        <button className='btn'>Learn More</button>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>

                {/* right hero */}
                <div className="rightHero">
                    <button className='btn'>Join Now</button>

                    <motion.div
                        className='HeartRate'
                        initial={{ right: '-1rem' }}
                        whileInView={{ right: '4rem' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                        <img src={heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>

                    <img src={hero_image} className='hero_image' alt="" />
                    <motion.img
                        initial={{ right: '11rem' }}
                        whileInView={{ right: '20rem' }}
                        transition={{ ...transition, type: 'tween' }}
                        src={hero_image_back} className='hero_image_back' alt="" />

                    <motion.div
                        className="calories"
                        initial={{ right: '37rem' }}
                        whileInView={{ right: '28rem' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                        <img src={calories} alt="" />
                        <div>
                            <span>Calories burned</span>
                            {/* <span></span> */}
                            <span>220 kcal</span>
                        </div>
                    </motion.div>

                </div>

            </div>

        </>
    )
}
