import React from 'react';
import HomeView from '../views/Home';
import Navbar from '../components/Navbar'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
    return (
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/settings' element={<h1>I am settings view</h1>} />
            <Route path='/login' element={<h1>I am login view</h1>} />
            <Route path='/register' element={<h1>I am register view</h1>} />
            <Route path='/' element={<HomeView />} />
          </Routes>
        </div>
      </Router>
    )
  }

export default App;