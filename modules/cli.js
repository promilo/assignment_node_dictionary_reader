const load = require("./loading.js")

const cli = {
  init: () => {
    console.log("hey");
    console.log('Welcome to the Node Dictionary Reader! press q to quit');
    var dict = load.loadDict()
    load.consolelogdicts()
  }

}

module.exports = cli;
