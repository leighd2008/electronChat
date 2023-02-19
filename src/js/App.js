import React from 'react';

import { Provider } from 'react-redux';

import HomeView from '../views/Home';
import ChatView from '../views/Chat';
import LoginView from '../views/Login';
import SettingsView from '../views/Settings';
import RegisterView from '../views/Register';


import Navbar from '../js/components/Navbar'
import configureStore from '../js/store/index';

const store = configureStore();

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
    return (
      <Provider store={store} >
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
      </Provider>
    )
  }

export default App;