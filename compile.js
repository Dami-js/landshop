const child_process = require('child_process')

function compileStyles() {
  child_process.exec(`sass src/public/styles/main.scss:src/public/styles/main.css --watch`)
}

compileStyles()