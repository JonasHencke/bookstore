import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Books from "./pages/Books"
import About from "./pages/About"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='books' element={<Books/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
