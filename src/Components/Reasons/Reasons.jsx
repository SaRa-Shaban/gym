import React from 'react'
import './Reasons.css';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nick from '../../assets/nike.png'
import tick from '../../assets/tick.png'


export default function Reasons() {
    return (
        <>
            <div className="reasons" id='whyUs'>
                <div className="leftReason">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                </div>

                <div className="rightReason">
                    <span>SOME REASONS</span>

                    <div>
                        <span className='strokeText'>why </span>
                        <span>choose us?</span>
                    </div>

                    <div className='detailsRightReason'>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>OVER 140+ EXPERT COACHS</span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>RELIABLE PARTNERS</span>
                        </div>

                        <span>OUR PARTNERS</span>

                        <div className="partners">
                            <img src={nb} alt="" />
                            <img src={adidas} alt="" />
                            <img src={nick} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
