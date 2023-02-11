import React from 'react';

const App = () => {
  const title = "Hello World";
  const enhancedTitle = title + ' - React App!';
  
  const sendNotification = () => {
    electron.notificationApi.sendNotification('My custom message again');
  }
  
  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  )
}

export default App;