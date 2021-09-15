const fse = require('fs-extra')

function mkdirs(name) {
    fse.ensureDirSync(name);
    console.log('Dir ' + name + ' was successfully created');

}

function remove(name) {
    fse.removeSync(name);
    console.log(name + ' was successfully deleted!');
}

function createFile(name) {
    fse.ensureFileSync(name)
    console.log('File ' + name + ' was successfully created')

}

function copyFile(fileFrom, fileTo) {
    fse.copySync(fileFrom, fileTo);
    console.log('File ' + fileFrom + ' was successfully copied to ' + fileTo);
}

module.exports = {
    mkdirs: mkdirs,
    remove: remove,
    createFile: createFile,
    copyFile: copyFile
}