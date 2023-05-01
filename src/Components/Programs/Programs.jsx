import React from 'react'
import './Programs.css';

import { programsData } from "./../../data/programsData";
import rigtArrow from './../../assets/rightArrow.png'

export default function Programs() {
    return (
        <>
            <div className="programs" id='programs'>
                <div className="headingPrograms">
                    <span className='strokeText'>EXPLORE OUR</span>
                    <span>PROGRAMS</span>
                    <span className='strokeText'>TO SHAPE YOU</span>
                </div>

                <div className="headingCategories">
                    {programsData.map((program) => (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className='joinNow'>
                            <span>Join Now</span>
                            <img src={rigtArrow} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
