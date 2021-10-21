const fse = require('fs-extra')

function addAndCopyFile(fileNameFrom, dirNameFrom, fileNameTo, dirNameTo, callback) {
    var dirs = [dirNameFrom, dirNameTo];
    dirs.forEach(element => mkdirs(element));
    callback(fileNameFrom, fileNameTo, copyFile)
}

function mkdirs(name) {
    fse.ensureDir(name, err => {
        if (err) return console.error(err)
        console.log('Dir ' + name + ' was successfully created');
    })
    
}

function remove(fileName, dirName, callback) {
    fse.remove(fileName, err => {
        if (err) return console.error(err)
        console.log(fileName + ' was successfully deleted!');
      })

      callback(dirName)
}

function removeDirs(name) {
    fse.remove(name, err => {
        if (err) return console.error(err)
        console.log(name + ' was successfully deleted!');
      })
}

function createAndCopyFile(filePath, filePathTo, callback) {
    fse.ensureFile(filePath, err => {
        if (err) return console.error(err)
        console.log('File ' + filePath + ' was successfully created')

    })
    callback(filePath, filePathTo)

}

function copyFile(fileFrom, fileTo, callback) {
    fse.copy(fileFrom, fileTo, err => {
        if (err) return console.error(err)
        console.log('File ' + fileFrom + ' was successfully copied to ' + fileTo);
    })
    callback(fileFrom, fileTo)
}

module.exports = {
    mkdirs: mkdirs,
    remove: remove,
    removeDirs: removeDirs,
    copyFile: copyFile,
    createAndCopyFile: createAndCopyFile,
    run: run
}