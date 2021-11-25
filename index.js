const chalk = require('chalk');
const fs = require('fs');
const encoding = 'utf-8';

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const results = [];
    let tmp = [];

    while ((tmp = regex.exec(text)) !== null) {
        results.push({ [tmp[1]]: [tmp[2]] });
    }

    return results.length === 0 ? '[*] No more links' : results;
}

function error(erro) {
    throw new Error(chalk.red(erro.code, '[*] File not found'));
}

async function getFile(path) {
    try {
        const text = await fs.promises.readFile(path, encoding);
        return extractLinks(text);
    } catch (erro) {
        error(erro);
    }
}

module.exports = getFile;