const fs = require('fs');
const lines = JSON.parse(fs.readFileSync('recovered_lines.json', 'utf8'));

lines.forEach((line, index) => {
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            obj.tool_calls.forEach(call => {
                if (call.name === 'multi_replace_file_content' || call.name === 'replace_file_content') {
                    if (call.args.ReplacementContent && call.args.ReplacementContent.includes('Pasif Gelir Kaynakları ve Stratejileri')) {
                        fs.writeFileSync(`recovered_content_${index}.txt`, call.args.ReplacementContent);
                        console.log(`Saved recovered_content_${index}.txt`);
                    } else if (call.args.ReplacementChunks) {
                         call.args.ReplacementChunks.forEach((chunk, cIndex) => {
                             if (chunk.ReplacementContent && chunk.ReplacementContent.includes('Pasif Gelir Kaynakları ve Stratejileri')) {
                                fs.writeFileSync(`recovered_content_${index}_${cIndex}.txt`, chunk.ReplacementContent);
                                console.log(`Saved recovered_content_${index}_${cIndex}.txt`);
                             }
                         });
                    }
                }
            });
        }
    } catch (e) {
        // ignore parse errors
    }
});
