import Core from 'urp-core';
import * as alt from 'alt-client';

let isOpen = false


const openteste = () => {
    Core.Browser.open('http://resources/urp-tamplate-typescript/client/html/index.html', true, true)
    
    Core.Browser.on('getPosition', () => {
        Core.Browser.emit('Position',JSON.stringify(alt.Player.local.pos))
    })
    alt.toggleGameControls(false)
    isOpen = true
}


const closeteste = () => {
    Core.Browser.close()
    alt.toggleGameControls(true)
    isOpen = false
}



 alt.on('keydown', (key) => {
     if (key === 49) {
         openteste()
     }
     if (key === 27 && isOpen) {
         closeteste()
     }
     
 })