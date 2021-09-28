const fs = require('fs')

const path = '/home/espai422/Escritoriso';

if (fs.existsSync(path)) {
  console.log('exists')
} else {
    console.log('No exists');
};