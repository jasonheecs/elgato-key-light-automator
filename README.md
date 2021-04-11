# Elgato Key Light Automator

[![Build Status][circleci-badge]][circleci-link]

A Node.js script that toggles on and off Elgato Key Lights and Elgato Key Light Airs. Elgato Stream Deck not required.

## Usage
```bash
git clone https://github.com/jasonheecs/elgato-key-light-automator.git
cd elgato-key-light-automator && npm i
node index.js
```

## Testing
Testing is done via Jest:
```bash
npm run test
```

Refer to the [Circle CI config](.circleci/config.yml) file and [CircleCI build logs][circleci-link] for details on the automated tests and expected outputs.

## License
MIT

[circleci-badge]: https://circleci.com/gh/jasonheecs/elgato-key-light-automator.svg?style=svg
[circleci-link]: https://app.circleci.com/pipelines/github/jasonheecs/elgato-key-light-automator