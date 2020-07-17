/* eslint-env node */
const fs = require('fs');

traverseFileSystem('doc/api');

function traverseFileSystem(path) {
    const files = fs.readdirSync(path);

    for (const file of files) {
        const filepath = path + '/' + file;
        const stats = fs.statSync(filepath);

        if (stats.isFile()) {
            transformFile(filepath);
        } else if (stats.isDirectory()) {
            traverseFileSystem(filepath);
        }
    }
}

function transformFile(filepath) {
    let data = fs.readFileSync(filepath, 'utf8');

    // Remove hierarchy section
    let regex = new RegExp('Hierarchy.+?##', 'gs');
    data = data.replace(regex, '');

    // Remove all titles and have them in
    // the mdx files instead
    data = data.replace(/^# (.*)$/gm, '');

    // Remove all links since they are broken
    // TODO: Maybe fix them so they work
    regex = /\[(.+?)]\(.+?\)/g;
    data = data.replace(regex, '$1');

    // Add a horizontal line at the end of the file
    data += '\n\n---';

    fs.writeFileSync(filepath, data, 'utf8');
}
