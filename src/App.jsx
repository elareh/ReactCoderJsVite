import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      
      <Routes>
        <Route path ="/" element={<ItemListContainer />} />
        <Route path ="/category/:id" element={<ItemListContainer />} />
        <Route path ="/item/:id" element={<ItemDetailContainer />} />

      </Routes>
    </div>
  );
};
export default App;
