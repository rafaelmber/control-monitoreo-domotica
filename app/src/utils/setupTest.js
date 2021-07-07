const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = new JSDOM(`
<!DOCTYPE html><p>Hello world</p>
`);
