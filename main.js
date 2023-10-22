// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");


let mainWindow;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1750,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, '/src/frontend/js/preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.loadFile("src/frontend/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on('ready', () => {
  ipcMain.on('load-page', (event, pageName) => {
    mainWindow.loadFile(`${pageName}.html`);
  });
});
