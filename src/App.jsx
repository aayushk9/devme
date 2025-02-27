import { Intro } from './components/Intro'
import { About} from './components/About'
import { Edu } from './components/Edu'   
import { Projects } from './components/Projects'
import { Blogs } from './components/Blogs' 
import { Skills } from './components/Skills'
import { Socials } from './components/Socials'
import './App.css'
 

//oklch(0.145 0 0)

function App() {
    return (
       <div className='text-center min-h-screen w-full pb-40'>
        
        <Intro/>
        <About/>
        <Edu/>    
        <Projects/>
        <Blogs/>
        <div className='m-10 mb-30'>
          <Skills/>
        </div>
        <Socials/>
       </div>
    )
}

export default App
  