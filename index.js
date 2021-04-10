const toggleKeyLight = require('./keylight');
const bonjour = require('bonjour')();

const browser = bonjour.find({ type: 'elg' });
browser.on('up', (service) => {
  toggleKeyLight({
    ip: service['referer'].address,
    port: service.port
  });
  bonjour.destroy();
});
