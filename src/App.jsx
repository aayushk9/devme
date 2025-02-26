import { useState } from 'react'
import {Router, BrowserRouter} from 'react-router-dom' 
import { Intro } from './components/Intro'
import { About} from './components/About'
import { Edu } from './components/Edu'   
import { Projects } from './components/Projects'
import { Blogs } from './components/Blogs' 
import { Skills } from './components/Skills'
import './App.css'


function App() {
    return (
       <div className='bg-black text-center min-h-screen w-full'>
        <Intro/>
        <About/>
        <Edu/> 
        <Projects/>
        <Blogs/>
        <Skills/>
       </div>
    )
}

export default App
  