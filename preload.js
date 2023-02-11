
const { ipcRenderer } = require('electron');


window.sendNotification = (message) => {
  ipcRenderer.send('notify', message);
}