const fs = require('fs');
const folderName = process.argv[2] || 'Project'



// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   console.log('IN THE CALLBACK');
//   if (err) throw err;
// });
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`,"adfl");
fs.writeFileSync(`${folderName}/app.css`,"css");
fs.writeFileSync(`${folderName}/app.js`,"js");