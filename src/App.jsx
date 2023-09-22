import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        {/* muestra todos los productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* muestra los productos de una categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;