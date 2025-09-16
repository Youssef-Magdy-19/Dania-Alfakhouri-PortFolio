import About from "./Pages/About"
import Footer from "./Compontents/Footer"
import Navbar from "./Compontents/Navbar"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import { Route, Routes } from "react-router-dom"
import ProjectDetails from "./Pages/ProjectDetails"
import { LoadingProvider } from "./context/LoadingContext";
import GlobalLoader from "./Compontents/GolbalLoader"
import PageNotFound from "./Pages/PageNotFound"




function App() {

  return (
    <>
      <LoadingProvider>

        <Navbar  />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <GlobalLoader />
        <Footer  />
      </LoadingProvider>
    </>
  )
}

export default App
