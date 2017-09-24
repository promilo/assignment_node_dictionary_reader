const fs = require("fs");

const load = {
  loadDict: () => {
    var path = "../data"
    return fs.readdirSync(path)
  },
  consolelogdicts: (dict) => {
    console.log("Type number to select");
    for (let i = 1; i < dict.length + 1; i++){
      console.log(`${i}. ${dict[i-1]}`)
    }
  }
}

module.exports = load;
