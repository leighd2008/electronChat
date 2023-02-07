// Main Process
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

// Renderer Process
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    backgroundColor: "lavender",
    webPreferences: {
    }
  })
  
  win.loadFile('index.html')
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(createWindow);
  

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
