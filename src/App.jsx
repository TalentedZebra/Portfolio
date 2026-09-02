import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Journal from './components/Journal.jsx'
import PhotoBand from './components/PhotoBand.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journal />
        <PhotoBand
          src={`${import.meta.env.BASE_URL}images/launch-banner.jpg`}
          alt="Reference photograph of a rocket launch, used for mood and not a photo of my own build"
          caption="Liftoff · Reference Photo"
        />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
