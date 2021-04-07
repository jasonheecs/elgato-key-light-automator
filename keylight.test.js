const axios = require('axios');
const keylight = require('./keylight');
const config = require('./config');
const url = `${config.host}${config.path}`;

jest.mock('axios');

describe('toggleKeyLight', () => {
  beforeEach(() => {
    axios.put.mockImplementationOnce(() => Promise.resolve(true));
  });

  describe('when light is off', () => {
    beforeEach(() => {
      const response = {
        data: { lights: [{ on: 0, brightness: 10, temperature: 255 }] }
      }
      axios.get.mockResolvedValue(response);
    });

    it('turns the light on', async() => {
      await keylight();
      expect(axios.put).toHaveBeenCalledWith(url, {"Lights": [{"On": 1}]});
    });
  });

  describe('when light is on', () => {
    beforeEach(() => {
      const response = {
        data: { lights: [{ on: 1, brightness: 10, temperature: 255 }] }
      }
      axios.get.mockResolvedValue(response);
    });

    it('turns the light on', async() => {
      await keylight();
      expect(axios.put).toHaveBeenCalledWith(url, {"Lights": [{"On": 0}]});
    });
  });
});
