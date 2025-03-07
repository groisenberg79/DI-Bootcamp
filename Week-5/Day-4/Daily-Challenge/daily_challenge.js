function getQueryParams(url) {
    const params = {};
    const parser = new URL(url);
    for (const [key, value] of parser.searchParams.entries()) {
        params[key] = value;
    }
    return params;
}

const queryParams = getQueryParams(window.location.href);
const infoJson = JSON.stringify(queryParams);
const newTextNode = document.createTextNode(infoJson);
const form = document.querySelector('form');
form.appendChild(newTextNode);