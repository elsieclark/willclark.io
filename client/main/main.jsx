const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

const HomePage   = require('../pages/index.jsx');
//const OtherPage  = require('../pages/otherpage.jsx');
const FourOhFour = require('./fourohfour/fourohfour.jsx');

const TopBar      = require('../shared/topbar/topbar.jsx');
const PageBody    = require('../shared/pagebody/pagebody.jsx');
const PageContent = require('../shared/pagecontent/pagecontent.jsx');
const LowBar      = require('../shared/lowbar/lowbar.jsx');

const pageList = require('../pages.json');

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
        };
    },

    getInitialState: function() {
        const pageDir = {};
        _.forEach(pageList, (value, key) => {
            const NewPage = require(`../pages/${value}`);
            pageDir[key] = <NewPage />;
        });
        pageDir['/*'] = <FourOhFour />;
        const router = createRouter(pageDir);
        return {
            router,
        };
    },

    render: function() {
        return <div className='main'>
            <TopBar pages={navBarLinks} />
            <PageBody>
                <PageContent>
                    <this.state.router defaultUrl={this.props.url} />
                </PageContent>
                <LowBar />
            </PageBody>
        </div>;
    },
});//

module.exports = Main;
