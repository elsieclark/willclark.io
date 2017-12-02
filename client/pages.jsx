module.exports = {
    '/': require('./pages/index.jsx'),
    '/otherpage': require('./pages/otherpage.jsx'),
    '/*': require('./main/fourohfour/fourohfour.jsx'),
};
