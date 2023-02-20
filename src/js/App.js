import React, { useEffect } from 'react';

import { Provider } from 'react-redux';

import HomeView from '../js/views/Home';
import ChatView from '../js/views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from '../js/views/Settings';


import Navbar from '../js/components/Navbar'
import configureStore from '../js/store/index';
import { listenToAuthChanges } from './actions/auth';

const store = configureStore();

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [])
  
    return (
      <Provider store={store} >
        <Router>
          <Navbar />
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' exact element={<WelcomeView />} />
              <Route path='/home' element={<HomeView />} />
              <Route path='/chat/:id' element={<ChatView />} />
              <Route path='/settings' element={<SettingsView />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    )
  }

export default App;