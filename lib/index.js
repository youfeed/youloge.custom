import  YouDrive from './drive/index.js'
import  YouWorld from './world/index.js'
const custom = [YouDrive,YouWorld];
custom.forEach(({name,custom,extend='div'}) => {
  customElements.define(`youloge-${name}`, custom, { extends: extend });
})