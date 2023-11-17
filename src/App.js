import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import BirthDay from './Pages/BirthDay';

const App = () =>{
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:YourName/:Date' element={<BirthDay />} />
      </Routes>
    </div>
  )
}

export default App;