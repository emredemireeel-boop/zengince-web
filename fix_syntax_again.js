const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data', 'girisimciler-data.js');

let content = fs.readFileSync(filePath, 'utf8');

// The script added literal "},\n    {" instead of evaluating \n
content = content.replace(/\\},\\n    \\{/g, '},\n  {');
content = content.replace(/\\}\\n\\];/g, '}\n];');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed syntax in girisimciler-data.js');
