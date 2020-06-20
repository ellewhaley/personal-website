import React from 'react';
import { HashRouter } from "react-router-dom";
import Header from './components/Header';
import ThreeContainer from './components/ThreeContainer';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <HashRouter>
        <div className="app">
          <Header />
          <ThreeContainer />
          <Main />
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;