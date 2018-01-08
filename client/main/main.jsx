const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

const pages = require('../pages.jsx');

const SideBar      = require('../shared/sidebar/sidebar.jsx');
const PageBody    = require('../shared/pagebody/pagebody.jsx');
const PageContent = require('../shared/pagecontent/pagecontent.jsx');
const LowBar      = require('../shared/lowbar/lowbar.jsx');

const Router = createRouter(_.mapValues(pages, (Value) => {
    return <Value/>;
}));

const navBarLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Projects',
        children: [
            {
                name: 'project1',
                link: '/project1',
            },
            {
                name: 'project2',
                link: '/project2',
            },
        ]
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

    render: function() {
        return <div className='main'>
            <SideBar pages={navBarLinks} />
            <PageBody>
                <PageContent>
                    <Router defaultUrl={this.props.url} />
                </PageContent>
                {/*<LowBar />*/}
            </PageBody>
        </div>;
    },
});//

module.exports = Main;
