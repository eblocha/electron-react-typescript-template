import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 800,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
        },
        backgroundColor: '#000',
    })

    win.loadURL(
        app.isPackaged
            ? `file://${path.join(__dirname, '../build/index.html')}`
            : `http://localhost:3000`
    ).then(() => {
        if (!app.isPackaged) {
            win.webContents.openDevTools()
        }
    })

    win.on('maximize', () => {
        win.webContents.send('maximized')
    })

    win.on('unmaximize', () => {
        win.webContents.send('unmaximized')
    })
}

app.on('ready', () => {
    createWindow()
    if (!app.isPackaged) {
        installExtension(REACT_DEVELOPER_TOOLS)
            .then(name => console.log(`Added extension: ${name}`))
            .catch(err => console.log(`An error occurred: ${err}`))
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// IPC below here
// Title bar callbacks
ipcMain.handle('maximize', () => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
        win.maximize()
    }
})

ipcMain.handle('minimize', () => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
        win.minimize()
    }
})

ipcMain.handle('restore', () => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
        win.restore()
    }
})

ipcMain.handle('close', () => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
        win.close()
    }
})
