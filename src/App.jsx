import React from 'react'

import { Work, About, Header, Footer, Skills, Testimonial, NavBar } from './utils/import'

import './App.scss'

const App = () => {
  return <div className='app'>
    <NavBar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
}

export default App