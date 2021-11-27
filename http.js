const fetch = require('node-fetch');

function handler(erro) {
    throw new Error(erro.message);
}

async function checkStatusURL(arrayURLs) {
    try {
        const statusList = await Promise
            .all(arrayURLs
                .map(
                    async url => {
                        const response = await fetch(url);
                        return `${response.status} => ${response.statusText}`
                    }
                )
            );
        return statusList;

    } catch (erro) {
        handler(erro);
    }
}

function generateURLArray(arrayLinks) {
    return arrayLinks
        .map(objectLink => Object
            .values(objectLink)
            .join()
        );
}

async function validateURL(arrayLinks) {
    let links = generateURLArray(arrayLinks);
    let statusLinks = await checkStatusURL(links);

    let results = arrayLinks.map((obj, index) => ({
        ...obj,
        status: statusLinks[index]
    }));

    return results;
}

module.exports = validateURL;