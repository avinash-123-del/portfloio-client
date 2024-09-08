import React from 'react'
import Header from './Components/Header'
import SliderArea from './Components/SliderArea'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />

      <div className="page-wrapper-two">
        <SliderArea />
        <Portfolio/>
        <Resume/>
        <Contact/>
      </div >
    </div>
    </BrowserRouter>
  )
}

export default App
