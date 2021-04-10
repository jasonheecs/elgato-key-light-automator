const axios = require('axios');
const keylight = require('./keylight');
const keylightService = {
  ip: '10.10.10.10',
  port: 1234
}
const expectedUrl = `http://${keylightService.ip}:${keylightService.port}/elgato/lights`;

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
      await keylight(keylightService);
      expect(axios.put).toHaveBeenCalledWith(expectedUrl, {"Lights": [{"On": 1}]});
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
      await keylight(keylightService);
      expect(axios.put).toHaveBeenCalledWith(expectedUrl, {"Lights": [{"On": 0}]});
    });
  });
});
