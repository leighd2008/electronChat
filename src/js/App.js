import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import StoreProvider from './store/StoreProvider';

import HomeView from '../js/views/Home';
import ChatView from '../js/views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from '../js/views/Settings';

import LoadingView from './components/shared/loadingView';

import { listenToAuthChanges } from './actions/auth';
import { listenToConnectionChanges } from './actions/app';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function AuthRoute({children, ...rest}) {
  const user = useSelector(({auth}) => auth.user)
  if (!user) {
    return <Navigate to='/' />
  }

  return children;
}

const ContentWrapper = ({children}) => <div className='content-wrapper'>{children}</div>

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({auth}) => auth.isChecking)
  
  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges())
    
    return () => {
      unsubFromAuth();
      unsubFromConnection();
    }
    
  }, [dispatch])
  
  if (isChecking) {
    return <LoadingView />
  }
  
  return (
    <Router>
      <ContentWrapper>
        <Routes>
          <Route path='/' exact element={<WelcomeView />} />
          <Route path='/home' element={<AuthRoute> <HomeView /> </AuthRoute>} />
          <Route path='/chat/:id' element={<AuthRoute><ChatView /></AuthRoute>} />
          <Route path='/settings' element={<AuthRoute><SettingsView /></AuthRoute>} />
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
