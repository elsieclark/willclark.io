'use strict';
const fs      = require('fs');
const readDir = require('recursive-readdir');

module.exports = () => {
    return readDir('./client/pages')
        .then((files) => {
            return files
                .filter((file) => file.slice(-4) === '.jsx')
                .map((file) => {
                    const sliceAmount = file.slice(-10) === '/index.jsx' ? -9 : -4;
                    return [file.slice(12, sliceAmount), `./${file.slice(7)}`];
                })
                .map(([uri, filePath]) => {
                    return `    '${uri}': require('${filePath}'),\n`;
                });
        })
        .then((routes) => {
            const startStr = 'module.exports = {\n';
            const endStr = '    \'/*\': require(\'./main/fourohfour/fourohfour.jsx\'),\n};\n';
            return new Promise((resolve, reject) => {
                fs.writeFile('./client/pages.jsx', startStr + routes.join('') + endStr, (err) => {
                    if (err) return reject(err);
                    return resolve();
                });
            });
        });
};
