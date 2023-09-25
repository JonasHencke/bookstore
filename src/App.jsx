import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";
import EmptyPage from "./pages/EmptyPage";
import ShoppingCart from "./pages/ShoppingCart";

const ThemeContext = React.createContext();

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
    const ProductExist = shoppingCart.find((item) => item.id === book.id);
    if (ProductExist) {
      setShoppingCart(
        shoppingCart.map((item) =>
          item.id === book.id
            ? { ...ProductExist, amount: ProductExist.amount + 1 }
            : item
        )
      );
    } else {
      const newBook = { amount: 1, ...book };
      setShoppingCart([newBook, ...shoppingCart]);
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
        showSnackbarMessage,
        setSnackbarMessage,
      }}
    >
      <HashRouter>
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
      </HashRouter>
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
export default App;
