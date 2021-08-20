import { ipcRenderer, contextBridge } from 'electron'
import path from 'path'

type API = {
    title: {
        maximize: () => Promise<void>
        minimize: () => Promise<void>
        restore: () => Promise<void>
        close: () => Promise<void>
        onMaximized: (fn: (...args: any[]) => void) => void
        onUnMaximized: (fn: (...args: any[]) => void) => void
    }
}

const api: API = {
    title: {
        maximize: () => ipcRenderer.invoke('maximize'),
        minimize: () => ipcRenderer.invoke('minimize'),
        restore: () => ipcRenderer.invoke('restore'),
        close: () => ipcRenderer.invoke('close'),
        onMaximized: fn => {
            ipcRenderer.on('maximized', (event, ...args) => fn(...args))
        },
        onUnMaximized: fn => {
            ipcRenderer.on('unmaximized', (event, ...args) => fn(...args))
        },
    },
}

contextBridge.exposeInMainWorld('main', api)

declare global {
    interface Window {
        main: API
    }
}
