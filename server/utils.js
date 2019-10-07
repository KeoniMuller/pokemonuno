const request = require('superagent');
const fs = require('fs');
const path = require('path');

async function getImage(url, fileName) {
  try {
    const pathFile = path.join(__dirname, `${fileName}.png`)
    var file = fs.createWriteStream(pathFile).on('finish', (err, data) => {
      if(err) console.log(err)
      else return;
    });
    const res = await request.get(url).pipe(file);
    const img = res.body;
    return img;
  } catch(e) {
    return false;
  }
  
}

module.exports = {
  getImage
}