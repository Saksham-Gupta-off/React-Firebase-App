import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/navbar'

function App() {
    return (
    <BrowserRouter>
      <div classname="App">
        <Navbar />
      </div>
    </BrowserRouter>
    )
}

export default App;
