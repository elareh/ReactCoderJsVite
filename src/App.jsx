import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div>
      <Navbar />

      <div>
      <Routes>
        <Route path ="/" element={<ItemListContainer />} />
        <Route path ="/category/:categoryId" element={<ItemListContainer />} />
        <Route path ="/item/:id" element={<ItemDetailContainer />} />

      </Routes>
      </div>
    </div>
  );
};
export default App;
