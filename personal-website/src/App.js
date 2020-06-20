import React from 'react';
import Header from './components/Header';
import ThreeContainer from './components/ThreeContainer';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ThreeContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;