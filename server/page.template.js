
module.exports = (vitreum) => {
    return `<html>
    <head>
        <meta name="viewport" content="width=750, user-scalable=no">
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