// src/App.jsx
import { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
// import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import ScrollIndicator from "./components/ScrollIndicator"

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className='bg-navy min-h-screen text-slate'>
        <Header aboutRef={aboutRef} projectsRef={projectsRef} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <About ref={aboutRef} />
                <Projects ref={projectsRef} />
              </>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
        <ScrollIndicator />
      </div>
    </Router>
  )
}

export default App
