
module.exports = (vitreum) => {
    return `<html>
    <head>
        <meta name="viewport" content="width=900, user-scalable=no">
        <meta name="google-site-verification" content="Wfcb3io9w_8FDx7pMJPUqX46969N7TRHLr-9P3bmXb0" />
        <!--<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />-->
        <script src="https://use.fontawesome.com/af4e1da625.js"></script>
        ${vitreum.head}
    </head>
    <body>
        <main id="reactRoot">${vitreum.body}</main>
    </body>
    ${vitreum.js}
</html>`;
};
