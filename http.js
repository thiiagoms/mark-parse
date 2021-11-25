const fetch = require('node-fetch');

async function checkStatusURL(arrayURLs) {
    // promisses async and await
    const statusList = await Promise.all(arrayURLs.map(
        async url => {
            const res = await fetch(url);
            return res.status;
        }
    ));

    return statusList;
}

function generateURLArray(arrayLinks) {
    return arrayLinks.map(
        objectLink => Object.values(objectLink)
        .join()
    );
}

async function validateURL(arrayLinks) {
    let links = generateURLArray(arrayLinks);
    let statusLinks = checkStatusURL(links);

    return statusLinks;
}


module.exports = validateURL;