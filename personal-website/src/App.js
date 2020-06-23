import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import ThreeContainer from './components/ThreeContainer';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Header />
          <ThreeContainer />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;