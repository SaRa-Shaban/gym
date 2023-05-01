import React from 'react'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Reasons from './Components/Reasons/Reasons'
import Plans from './Components/Plans/Plans';
import './App.css';
import Testmonial from './Components/Testmonial/Testmonial';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';


export default function App() {
  return (
    <>
    <div className='App'>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testmonial/>
      <Join/>
      <Footer/>
    </div>
    </>
  )
}
