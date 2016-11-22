var path = require('path');

// Rename this file to config.js
module.exports = {
    'domain': 'http://localhost',
    'port': 8080,
    'rootPath': path.dirname(process.mainModule.filename),
};
