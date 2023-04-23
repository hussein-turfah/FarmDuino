const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

// This method will be called when Electron has finished initialization
//  and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    //Re-create a window in the app when the dock icon is clicked 
    // and there are no other windows open on macOS.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed except on macOS. 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})