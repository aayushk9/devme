import { Intro } from './components/Intro'
import { About} from './components/About'
import { Edu } from './components/Edu'   
import { Projects } from './components/Projects'
import { Blogs } from './components/Blogs' 
import { Skills } from './components/Skills'
import { Socials } from './components/Socials'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <>
              <div className='text-center min-h-screen w-full pb-40'>
                <Intro />
                <About />
                <Edu />
                <Projects />
                <Skills />
                <Socials />
              </div>
            </>
          }
        ></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App