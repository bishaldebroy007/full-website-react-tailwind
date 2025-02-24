
import NavBar from './components/NavBar'
import MyImage from './components/MyImage'
import Footer from './components/Footer'
import IntroCards from './components/IntroCards';
import TimeLines from './components/TimeLines';

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <div className='flex flex-row w-full m-2'>
          <MyImage />
          <IntroCards />
        </div>
        <TimeLines />

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
