const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

//const HomePage   = require('./homepage/homepage.jsx');
//const OtherPage  = require('./otherpage/otherpage.jsx');
const FourOhFour = require('./fourohfour/fourohfour.jsx');

const TopBar      = require('../shared/topbar/topbar.jsx');
const PageBody    = require('../shared/pagebody/pagebody.jsx');
const PageContent = require('../shared/pagecontent/pagecontent.jsx');
const LowBar      = require('../shared/lowbar/lowbar.jsx');

/*
recursive('../pages/')
    .then((files) => {
        let routerData;
        console.log('Beta')
        _.forEach(files, (file) => {
            console.log('Gamma')
            console.log(file)
        });
    })
    .catch(console.log)*/

/*
const Router = createRouter({
    '/': <AppPage />,
    '/*': <FourOhFour />
});
*/

const navBarLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
    {
        name: 'Résumé',
        link: '/résumé'
    },
];

const Main = createClass({
    
    getDefaultProps: function() {
        return {
            url: '/',
            Router: <div />,
            routeTable: {},
        };
    },
    
    componentDidMount: function() {
        const routeTable = this.props.routeTable;
        routeTable['/*'] = <FourOhFour />;
        const Router = createRouter(routeTable);
        this.setState({ Router });
    },
    
    render: function() {
        return <div className='main'>
            <TopBar pages={navBarLinks} />
            <PageBody>
                <PageContent>
                    {this.props.Router}
                </PageContent>
                <LowBar />
            </PageBody>
        </div>;
    },
});//<Router defaultUrl={this.props.url} />

module.exports = Main;
