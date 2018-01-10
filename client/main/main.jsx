const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

const pages = require('../pages.jsx');

const SideBar      = require('../shared/sidebar/sidebar.jsx');
const PageBody    = require('../shared/pagebody/pagebody.jsx');
const PageContent = require('../shared/pagecontent/pagecontent.jsx');

const Router = createRouter(_.mapValues(pages, (Value) => {
    return <Value/>;
}));

const fourOhFourImg = ('./assets/assets/404.jpg');

const navBarLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Projects',
        children: [
            {
                name: 'PromEth',
                subtitle: 'Asynchronous Ethereum executor',
                link: '/prometh',
            },
            {
                name: 'Tetr.js',
                subtitle: 'Machine learning to beat Tetris',
                link: '/tetrjs',
            },
            {
                name: 'Arbiter',
                subtitle: 'Arbitrage trading bot for Bitcoin',
                link: '/arbiter',
            },
        ]
    },
    {
        name: 'Résumé',
        link: '/otherpage', // résumé
    },
];

const Main = createClass({

    getDefaultProps: function() {
        return {
            url: '/',
        };
    },

    render: function() {
        return <div className='main'>
            <div className='background' />
            <SideBar pages={navBarLinks} />
            <PageBody>
                <PageContent>
                    <Router defaultUrl={this.props.url} />
                </PageContent>
            </PageBody>
            <img className='lazyImage' src={fourOhFourImg} />
        </div>;
    },
});//

module.exports = Main;
