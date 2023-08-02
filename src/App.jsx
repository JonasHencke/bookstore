import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Books from "./pages/Books"
import BookDetails from './pages/BookDetails'
import About from "./pages/About"
import EmptyPage from "./pages/EmptyPage"

const ThemeContext = React.createContext();

function App() {  
  const [shoppingCart, setShoppingCart] = React.useState([])

  function addItemToCart(id, author, title, price) {
    setShoppingCart([
      ...shoppingCart,
      {id: id, author: author, title: title, price: price }
    ]
    );
    console.log(shoppingCart)
  }

  return (
    <ThemeContext.Provider value={{shoppingCart, addItemToCart}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='books' element={<Books/>}/>
          <Route path='books/:id' element={<BookDetails/>}/>
          <Route path="*" element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  )
}
export { ThemeContext }
export default App
