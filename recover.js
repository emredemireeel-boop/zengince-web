const fs = require('fs');
const readline = require('readline');
const path = 'C:\\Users\\GAMER\\.gemini\\antigravity-ide\\brain\\52165ffc-f10d-4bd1-ab8b-e689cbe8014b\\.system_generated\\logs\\transcript.jsonl';

const rl = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity
});

let matches = [];

rl.on('line', (line) => {
    if (line.includes('makaleler-data.js') && line.includes('replace_file_content')) {
        matches.push(line);
    }
});

rl.on('close', () => {
    if (matches.length > 0) {
        fs.writeFileSync('recovered_lines.json', JSON.stringify(matches, null, 2));
        console.log('Saved ' + matches.length + ' matches to recovered_lines.json');
    } else {
        console.log('No matches found.');
    }
});
