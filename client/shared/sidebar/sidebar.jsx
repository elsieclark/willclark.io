const _           = require('lodash');
const cx          = require('classnames');
const createClass = require('create-react-class');
const React       = require('react');
const Link        = require('pico-router').Link;

const TopBar = createClass({
    getDefaultProps: function() {
        return {
            pages: [],
        };
    },
    getInitialState: function() {
        return {
            currentPage: '/',
        };
    },
    getCurrentPage: function(e) {
        this.setState({
            currentPage: decodeURI(e.currentTarget.href.split(window.location.origin)[1])
        });
    },

    componentDidMount: function() {
        this.setState({
            currentPage: decodeURI(window.location.href.split(window.location.origin)[1])
        });
    },

    renderChildPageLinks: function(children) {
        return _.map(children, (child) => {
            return <Link className={cx('pageLink', { activePage: this.state.currentPage === child.link })}
                    href={`${child.link}`}
                    onClick={this.getCurrentPage}>
                {child.name}
            </Link>;
        });
    },

    collapsePageGroup: function(evt) {
        evt.target.setAttribute('value', evt.target.getAttribute('value') === 'false');

        console.log('alpha', evt.target.getAttribute('value') === 'true');
    },

    renderPageLinks: function() {
        return _.map(this.props.pages, (page) => {
            if (page.children) {
                return <div className='pageLinkCategory'>
                    <div className='pageLink categoryTitle' onClick={this.collapsePageGroup} value={false}>
                        {page.name}
                        <div className='expandSymbol'>x</div>
                    </div>
                    {this.renderChildPageLinks(page.children)}
                </div>;
            }
            return <Link className={cx('pageLink', { activePage: this.state.currentPage === page.link })}
                    href={`${page.link}`}
                    onClick={this.getCurrentPage}>
                {page.name}
            </Link>;
        });
    },

    render: function() {
        return <div className='sidebar'>
            <div className='sideContent'>
                <h3 className='siteTitle'>WillClark.io</h3>
                <h4 className='siteSubtitle'>Will Clark's homepage</h4>
                <nav className='pageLinkList'>
                    {this.renderPageLinks()}
                </nav>
                <div className='mediaLinks'></div>
                <div className='filler' />
                <p className='footer'><span>©</span> 2017 - Will Clark</p>
            </div>

        </div>;
    }
});

module.exports = TopBar;
