import React from 'react'
import './Footer.css'
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";


export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="blur blurFooter1"></div>
        <div className="blur blurFooter2"></div>

        <hr />
        <div className="media">
          <div className="socialLink">
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
