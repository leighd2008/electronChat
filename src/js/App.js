import React from 'react';
import HomeView from '../views/Home';
import ChatView from '../views/Chat';
import LoginView from '../views/Login';
import SettingsView from '../views/Settings';
import RegisterView from '../views/Register';


import Navbar from '../js/components/Navbar'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
    return (
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' exact element={<HomeView />} />
            <Route path='/chat/:id' element={<ChatView />} />
            <Route path='/settings' element={<SettingsView />} />
            <Route path='/login' element={<LoginView />} />
            <Route path='/register' element={<RegisterView />} />
          </Routes>
        </div>
      </Router>
    )
  }

export default App;