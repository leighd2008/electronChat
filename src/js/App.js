import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import StoreProvider from './store/StoreProvider';

import HomeView from '../js/views/Home';
import ChatView from '../js/views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from '../js/views/Settings';


import Navbar from '../js/components/Navbar'
import LoadingView from './components/shared/loadingView';

import { listenToAuthChanges } from './actions/auth';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const ContentWrapper = ({children}) => <div className='content-wrapper'>{children}</div>

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({auth}) => auth.isChecking)
  
  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, [dispatch])
  
  if (isChecking) {
    return <LoadingView />
  }
  
  return (
    <Router>
      <Navbar />
      <ContentWrapper>
        <Routes>
          <Route path='/' exact element={<WelcomeView />} />
          <Route path='/home' element={<HomeView />} />
          <Route path='/chat/:id' element={<ChatView />} />
          <Route path='/settings' element={<SettingsView />} />
        </Routes>
      </ContentWrapper>
    </Router>
    
  )
}

export default function App() {
  return (
    <StoreProvider >
      <ChatApp />
    </StoreProvider>
    
  )
}
