const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.

const { BrowserWindow } = require('electron')

global.mainWindow = null
function createWindow () {
  mainWindow = new BrowserWindow({width: 1152, height: 648})
	mainWindow.loadURL(`file://${__dirname}/index.html`)
mainWindow.setMenu(null);
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow()
	}
})
