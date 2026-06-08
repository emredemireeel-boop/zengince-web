const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data', 'girisimciler-data.js');

let content = fs.readFileSync(filePath, 'utf8');

// The file currently starts with: 'use strict';\n\nconst GIRISIMCILER = [
// We need to replace literal \n with real newlines
content = content.replace(/'use strict';\\n\\n/, "'use strict';\n\n");
content = content.replace(/;\\n\\nmodule\.exports = \{ GIRISIMCILER \};\\n/, ";\n\nmodule.exports = { GIRISIMCILER };\n");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed girisimciler-data.js AGAIN');
