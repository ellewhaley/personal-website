import React from 'react';
import Header from './components/Header';
import ThreeContainer from './components/ThreeContainer';
import Main from './components/Main';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ThreeContainer />
      <Main />
    </div>
  );
}

export default App;