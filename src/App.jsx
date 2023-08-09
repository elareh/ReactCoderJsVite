import React from 'react';
import './index.css';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/footer/Footer.jsx';


const App = () => {
  return (

    <>
      <Navbar />

      <ItemListContainer
        greetings="Hola Mundo!"
      />

      <Footer />
    </>
  );
};
export default App;
