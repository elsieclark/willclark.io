const pages = {
    '/': require('./pages/index.jsx'),
    '/projects': require('./pages/otherpage.jsx'),
    '/*': require('./main/fourohfour/fourohfour.jsx'),
}

module.exports = pages;