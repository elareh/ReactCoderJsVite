import React from 'react';
import './index.css';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
// import CardWidget from './components/cardEjemplo/CardEjemplo.jsx';


const App = () => {
  return (

    <>
      <Navbar />

      <ItemListContainer
        titulo="Greetings!"
      />
    </>
  );
};
export default App;
