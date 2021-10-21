const fs = require('./fileService');
const path = require('path');

const dirs = ['tmp1', 'tmp2'];
const fileName = 'file.txt';

const filePath = path.join(dirs[0], fileName);
const filePathTo = path.join(dirs[1], fileName);

fs.run(filePath, dirs[0], filePathTo, dirs[1], fs.createAndCopyFile)
