const axios = require('axios').default;
const config = require('./config');
const url = `${config.host}${config.path}`;

async function getKeylight() {
  return await axios.get(url);
}

async function toggleKeyLight() {
  const keylightData = await getKeylight();
  const light = keylightData.data.lights[0];

  return light.on ? await turnLightOff() : await turnLightOn();
}

async function turnLightOff() {
  return await axios.put(url, { "Lights": [
      {
        "On": 0
      }
    ]});
}

async function turnLightOn() {
  return await axios.put(url, { "Lights": [
      {
        "On": 1
      }
    ]});
}

module.exports = toggleKeyLight;
