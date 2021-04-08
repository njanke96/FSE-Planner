/*
The main.js for electron. Taken from the quickstart guide.
*/
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 800,

    // note that this only sets the icon on windows
    icon: path.join(__dirname, 'visual_assets', 'winicon.ico')
  })

  win.loadURL(path.join(__dirname, 'build', 'index.html'))
  win.setMenu(null)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})