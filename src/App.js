import "./App.css"

// import "./font/Ubuntu-R.ttf"
import "./fontswebsite/Ubuntu-Medium.ttf"
import "./fontswebsite/BaiJamjuree-Bold.ttf"
import React from "react"
import Navbar from "./compoent/Navbar"
import TimeLine from "./compoent/Timeline"
import About from "./compoent/About"
import Contact from "./compoent/Contact"
import Homepage from "./compoent/Homepage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
        <About/>
        <TimeLine />
        <Contact />
      </Router>
    </>
  )
}

export default App
