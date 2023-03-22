// Main Process
const { app, BrowserWindow, ipcMain, Notification, Menu, Tray } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

const dockIcon = path.join(__dirname, 'assets', 'images', 'react_app_logo.png');
const trayIcon = path.join(__dirname, 'assets', 'images', 'react_icon.png');


// Renderer Process
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#6e707e",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  win.loadFile('index.html')
  isDev && win.webContents.openDevTools();
}

function createSecondWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#6e707e",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
    }
  })
  
  win.loadFile('second.html')
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

if (process.platform === 'darwin') {
  app.dock.setIcon(dockIcon);
}

let tray = null;
app.whenReady()
  .then(() => {
    const template = require('./utils/Menu').createTemplate(app);
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    
    tray = new Tray(trayIcon);
    tray.setContextMenu(menu);
    
    createWindow();
    createSecondWindow();
  });
  
ipcMain.on('notify', (e, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

ipcMain.on('app-quit', () => {
  app.quit();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
