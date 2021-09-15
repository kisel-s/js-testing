const fs = require('./fileService');
const path = require('path');

const dirs = ['tmp1', 'tmp2'];
const fileName = 'file.txt';

dirs.forEach(element => fs.mkdirs(element));

const filePath = path.join(dirs[0], fileName);
fs.createFile(filePath);

const filePathTo = path.join(dirs[1], fileName);
fs.copyFile(filePath, filePathTo);

fs.remove(filePath);
fs.remove(filePathTo);
dirs.forEach(element => fs.remove(element));
