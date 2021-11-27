const chalk = require('chalk');
const getFile = require('./index');
const checkURL = require('./http');

const fullPath = process.argv;

async function proccessFile(filePath) {
    const result = await getFile(filePath[2]);

    if (filePath[3] === '--check-links') {
        console.log(chalk.yellow('[*] Links validate => '), await checkURL(result));
        return;
    }
    console.log(chalk.yellow('[*] Links list => '), result);
}

proccessFile(fullPath);
