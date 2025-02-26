
// import { useState } from 'react';
import NavBar from './components/NavBar'
import MyImage from './components/MyImage'
import Footer from './components/Footer'
import IntroCards from './components/IntroCards';
import Gallery from './components/Gallery';
// import TimeLines from './components/TimeLines';
// import AboutSection from './components/AboutSection';
// import Experience from './components/Experience';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import MovingPictures from './components/MovingPictures';


function App() {
  // const [showAbout, setShowAbout] = useState("About");

  // const handelSwitch = (component) => {
  //   setShowAbout(component);
  // }

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <div className='flex flex-row'>
          <MyImage />
          <IntroCards />
        </div>


        <div>
          <Gallery />

        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
