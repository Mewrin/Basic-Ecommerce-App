import React from 'react';
import ECommerceComponent from './components/ecommerce/ECommerceComponent';
import './App.css';

function App() {
  // Could change h1 to a navbar component and use a react router
  return (
    <div>
      <h1 className="App"> Welcome to a basic ecommerce app, made using React and Redux :)</h1> 
      <ECommerceComponent />
    </div>
  );
}

export default App;
