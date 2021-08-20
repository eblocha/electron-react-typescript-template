# Electron with React and Typescript Template

This template is for a basic electron application that uses typescript with a React-based renderer.

The motivation for making this template is to provide a starter electron app the correct, safe way. I have found that other templates still use javascript for the main process code, or turn on nodeIntegration in the renderer, which can be unsafe. I also wanted a basic custom title bar for the window rendered by React, instead of the ugly default Windows title bar.

**nodeIntegration is turned OFF, which is the safe default recommended by electron**

This template targets Windows for builds, since that is what I will be making desktop apps for. No plans to support other platforms yet.

## Modifications
- A tsconfig.electron.json was added to handle compiling electron code written in typescript. This will compile everything from the src/main directory into an `electron` directory
- Included are the standard Windows title bar icons as React components, and a draggable title bar is added to the top of the frameless window
    - This title bar uses IPC to communicate with the main process to handle maximize/minimize/restore/close, as well as detect when the user has maximized/restored
- The preload script has type definitions for the IPC api, so that the api object attached to the `window` object has types
- The contextBrige API is used for IPC with the main process instead of exposing native node modules to the renderer, such as `fs`
    - Only the main process has access to native apis directly, so their use can be tightly controlled
- the `index.html` file and `public` folder is stripped down

### Scripts
- `start`
    - Run to start the dev server, with hot reload for the renderer code. No hot-reloading for the main process yet.
- `build`
    - Run to package the app for windows

## Electron Tips
- The new `assets` folder can contain the app icon. Put a file named `icon.png` that is at least 512x512 in this folder to use it as the app icon when packaged
    - note that the default electron icon is still used in dev mode
- In `package.json`, edit the `build.appId` and `build.productName` to contain the name of your app. The `productName` entry will be the name of the executable and the app in the start menu.
- Add `author` and `description` entries to `package.json`.