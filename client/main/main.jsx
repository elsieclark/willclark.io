const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
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
            /*{
                name: 'Tetr.js',
                subtitle: 'Machine learning to beat Tetris',
                link: '/tetrjs',
            },*/
            {
                name: 'Slamster',
                subtitle: 'Autonomous 2-wheeled robot',
                link: '/slamster',
            },
            {
                name: 'Simon Says',
                subtitle: 'Multi-platform memory game',
                link: '/simon_says',
            },
        ]
    },
    {
        name: 'Résumé',
        link: '/résumé.pdf',
        ext: true,
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
