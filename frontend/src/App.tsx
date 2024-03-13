import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './header';
import FoodList from './Food/foodlist';

function App() {
  return (
    <div className="App">
      <Header title="Full Stack React & ASP.NET"/>
      <FoodList />
    </div>
  );
}

export default App;
