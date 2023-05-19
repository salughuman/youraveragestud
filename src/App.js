import React from 'react';

import Hero from './components/Hero';
// import {Route, Link} from "React-Router-Dom"
import Contact from './components/Contact';
import About from './components/About'
import HamburgerMenu from './components/Navbar';

function App() {
  return (
    <div className='bg-primary-100'>
     <Hero/>
     <About/>
     <Contact/>
     <HamburgerMenu/>
    </div>
  );
}

export default App;
