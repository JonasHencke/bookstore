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
    }, 4500);
  }

  function addItemToCart(book) {
    const i = shoppingCart.findIndex((e) => e.id === book.id);
    if (i == -1) {
      book.amount = 1;
      setShoppingCart([book, ...shoppingCart]);
    } else {
      shoppingCart[i].amount += 1;
    }
  }

  function removeItemFromCart(book) {
    const i = shoppingCart.findIndex((e) => e.id === book.id);
    book.amount -= 1;
    if (book.amount > 0) {
      const nextShoppingCart = shoppingCart.map((c, index) => {
        if (i === index) {
          return book;
        } else {
          return c;
        }
      });
      setShoppingCart(nextShoppingCart);
    } else {
      setShoppingCart(shoppingCart.filter((a) => a.id != book.id));
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addItemToCart,
        removeItemFromCart,
      }}
    >
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
