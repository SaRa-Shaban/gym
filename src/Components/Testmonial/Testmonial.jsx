import React from 'react'
import './Testmonial.css'
import '../../App.css'
import { testimonialsData } from "./../../data/testimonialsData";
import { useState } from "react";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'



export default function Testmonial() {

    const transition = { type: 'spring', duration: 2 }

    const [selected, setSelected] = useState(0);
    const testmonialLength = testimonialsData.length


    return (
        <>
            <div className="testmonial" id='testimonials'>
                <div className="leftTestmonial">
                    <span>TESTIMONIALS</span>
                    <span className='strokeText'>WHAT THEY</span>
                    <span>SAY ABOUT US</span>
                    <motion.span
                    key={selected}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={transition}
                    >
                        {testimonialsData[selected].review}
                    </motion.span>
                    <span>
                        <span style={{ color: 'var(--orange)' }}>
                            {testimonialsData[selected].name}
                        </span>
                        <span>
                            &nbsp;-{' '}{testimonialsData[selected].status}
                        </span>
                    </span>
                </div>

                <div className="rightTestmonial">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...transition, duration: 3 }}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...transition, duration: 3 }}
                    ></motion.div>

                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ ...transition, type: 'tween' }}
                        src={testimonialsData[selected].image} alt="" />

                    <div className="arrows">
                        <img src={leftArrow} alt="" onClick={
                            () => {
                                selected === 0 ?
                                    setSelected(testmonialLength - 1) :
                                    setSelected((prev) => prev - 1)
                            }
                        } />
                        <img src={rightArrow} alt="" onClick={
                            () => {
                                selected === testmonialLength - 1 ?
                                    setSelected(0) :
                                    setSelected((prev) => prev + 1)
                            }
                        } />
                    </div>
                </div>
            </div>
        </>
    )
}
