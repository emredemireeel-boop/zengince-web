const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'girisimciler-data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// The file currently starts with: \'use strict\';\n\nconst GIRISIMCILER = [
// We need to replace literal \n with real newlines, and \' with '
content = content.replace(/\\'use strict\\';\\n\\n/, "'use strict';\n\n");
content = content.replace(/;\\n\\nmodule\.exports = \{ GIRISIMCILER \};\\n/, ";\n\nmodule.exports = { GIRISIMCILER };\n");

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Fixed girisimciler-data.js');
