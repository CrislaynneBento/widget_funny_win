const {app, BrowserWindow} = require('electron')
const path = require('path')

function criarJanela(){
    const janela = BrowserWindow({
        width: 340, height: 520,
        x: 30, y:30,
        transparent: true,
        frame: false,
        alawaysOntop: false,
        skipTaskbar: true,
        resizable: false,
        webPreferencies: {
            nodeIntegration: True,
            contextIsolation: false
        }
    })
    janela.loadFile('widget.html')
}
app.whenReady().then(criarJanela)