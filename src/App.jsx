import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";
import EmptyPage from "./pages/EmptyPage";
import ShoppingCart from "./pages/ShoppingCart";

const ThemeContext = React.createContext();
function showMessage() {}

function App() {
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [SnackbarShow, setSnackbarShow] = React.useState(["invisible"]);
  const [SnackbarMessage, setSnackbarMessage] = React.useState("");

  function showSnackbarMessage() {
    setSnackbarShow("visible");
    setTimeout(() => {
      setSnackbarShow("invisible");
    }, 5000);
  }

  function addItemToCart(book) {
    setShoppingCart([book, ...shoppingCart]);
    console.log(shoppingCart);
  }

  return (
    <ThemeContext.Provider value={{ shoppingCart, setShoppingCart, addItemToCart }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                SnackbarShow={SnackbarShow}
                SnackbarMessage={SnackbarMessage}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="contact"
              element={
                <Contact
                  showSnackbarMessage={showSnackbarMessage}
                  setSnackbarMessage={setSnackbarMessage}
                />
              }
            />
            <Route path="books" element={<Books />} />
            <Route path="books/:id" element={<BookDetails />} />
            <Route
              path="shoppingcart"
              element={
                <ShoppingCart
                  showSnackbarMessage={showSnackbarMessage}
                  setSnackbarMessage={setSnackbarMessage}
                />
              }
            />
            <Route path="*" element={<EmptyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
export default App;
