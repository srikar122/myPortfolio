import { main } from 'framer-motion/client'
import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Footer from './components/Footer'
import JumpingBall from './components/myComponents/JumpingBall'
const App = () => {
  return (
      <BrowserRouter>
        <main className='relative z-0'>
          <div className='bg-gradient-to-b  from-[#24124ab9] to-black-100 bg-cover bg-no-repeat bg-center'>
            <Navbar className='' />
          <Hero />
            </div>

            <About/>
          <Tech></Tech>
            <Works></Works>
            <Contact></Contact>
            <Footer></Footer>
          <Routes>
            {/* <Route path="/" element={<Hero />} /> */}
            <Route path="/#about" element={<About />} />
            {/* <Route path="/#experience" element={<Experience />} /> */}
            <Route path="/#tech" element={<Tech />} />
            <Route path="/#works" element={<Works />} />
            {/* <Route path="/#feedbacks" element={<Feedbacks />} /> */}
            <Route path="/#contact" element={<Contact />} />
          </Routes>

        </main>
      </BrowserRouter>
    )
}

export default App