const path = require('path');
const os = require('os');
const fs = require('fs');
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let mainWindow;
let aboutWindow;

// Main Window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1000 : 500,
    height: 600,
    resizable: isDev,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

   // mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
   mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

// When the app is ready, create the window
app.on('ready', () => {
  createMainWindow();


  // Remove variable from memory
  mainWindow.on('closed', () => (mainWindow = null));
});


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});

// Open a window if none are open (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});