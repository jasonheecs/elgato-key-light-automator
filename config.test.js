const fs = require('fs');

describe('reading of configuration', () => {
  beforeEach(() => {
    jest.resetModules()
  });

  describe('when a config file does not exist', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    });

    it('returns the default config values without reading the homedir', () => {
      const JSONResponse = JSON.stringify({});
      const spy = jest.spyOn(fs, 'readFileSync').mockImplementation(() => JSONResponse);
      const config = require('./config');
      expect(spy).toHaveBeenLastCalledWith('./config.json');
    });
  });

  describe('when a config file does exists', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    });

    it('reads the config file in the homedir', () => {
      const JSONResponse = JSON.stringify({});
      const spy = jest.spyOn(fs, 'readFileSync').mockImplementation(() => JSONResponse);
      const config = require('./config');
      expect(spy).toHaveBeenLastCalledWith(config.configPath);
    });
  });
})