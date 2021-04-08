const axios = require('axios').default;
const config = require('./config');

async function getKeylight(url) {
  return await axios.get(url);
}

async function toggleKeyLight() {
  await Promise.all(config.urls.map(async (url) => {
    const keylightUrl = `${url.host}${url.path}`;
    const keylightData = await getKeylight(keylightUrl);
    const light = keylightData.data.lights[0];

    return light.on ? await turnLightOff(keylightUrl) : await turnLightOn(keylightUrl);
  }));
}

async function turnLightOff(url) {
  return await axios.put(url, { "Lights": [
      {
        "On": 0
      }
    ]});
}

async function turnLightOn(url) {
  return await axios.put(url, { "Lights": [
      {
        "On": 1
      }
    ]});
}

module.exports = toggleKeyLight;
