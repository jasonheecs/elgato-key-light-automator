const fs = require('fs');
const homedir = require('os').homedir();
const configPath = homedir + "/Library/Application\ Support/ElgatoKeyLightAutomator/config.json";

let config;
if (fs.existsSync(configPath)) {
  config = fs.readFileSync(configPath);
} else {
  config = fs.readFileSync('./config.json');
}

module.exports = JSON.parse(config);
module.exports.configPath = configPath;
