import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Feature from './components/FeatureBox/Feature';
import About from './components/About/About';
import aboutimage from './img/Frame 19.png';
import aboutimage1 from './img/download.png';
import Presentation from './components/Presentation/Presentation';
import  {Contact}  from './components/Contact/Contact';

const App = () => {
  return (
   <>
   <Navbar />
   <Feature />
   <About image ={aboutimage} title = 'Comes With All You Need For Daily Life' button= 'Get The App' />
   <Presentation />
   
   <About image ={aboutimage1} title = 'Download and get the App Now' button= 'Download' />
   
   <Contact />
   
   </>
  )
}

export default App