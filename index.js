import { generate } from './color-palette.js'

const colors = generate(30)
colors.forEach(color => { console.log(color) })