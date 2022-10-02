const fs = require('fs');
const path = require('path');

const miscFiles = ['package.json', 'LICENSE', 'README.md'];

miscFiles.forEach((filepath) => {
  const source = path.resolve(__dirname, '../', filepath);
  const destination = path.resolve(__dirname, '../dist', filepath);

  fs.copyFile(source, destination, (err) => {
    if (err) throw err;
  });
});
