import React from 'react'
import './Plans.css';
import './../Programs/Programs.css';
import { plansData } from "./../../data/plansData";
import rigtArrow from './../../assets/rightArrow.png'
import whiteTick from './../../assets/whiteTick.png'


export default function Plans() {
    return (
        <>
            <div className="plansContainer" id='plans'>
                <div className="blur blurPlan1"></div>
                <div className="blur blurPlan2"></div>
                <div className="headingPrograms">
                    <span className='strokeText'>READY TO START</span>
                    <span>YOUR JOURNEY</span>
                    <span className='strokeText'>NOW WITHUS</span>
                </div>

                {/* plans card */}
                <div className="plans">
                    {plansData.map((plan, i) => (
                        <div className="plan">
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature, i) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{feature}</span>
                                    </div>
                                ))
                                }
                            </div>

                            <div className='joinNow'>
                                <span>See more benefits </span>
                                <img src={rigtArrow} alt="" />
                            </div>

                            <button className='btn'>Join Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
