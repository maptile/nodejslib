const path = require('path');

const appRoot = path.dirname(require.main.filename);

const userHomeDir = require('os').homedir();

module.exports = {
    appRoot,
    userHomeDir
};
