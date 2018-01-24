const _           = require('lodash');
const cx          = require('classnames');
const createClass = require('create-react-class');
const React       = require('react');
const Link        = require('pico-router').Link;

const profileImg = ('./assets/assets/portrait.jpg');

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

    collapsePageGroup: function(evt) {
        let target = evt.target;
        if (target.getAttribute('class') === 'expandSymbol') {
            target = target.parentNode;
        }
        target.setAttribute('value', `${target.getAttribute('value') === 'false'}`);
        if (target.getAttribute('value') === 'true') {
            target.parentNode.setAttribute('class', 'pageLinkCategory');
            target.getElementsByClassName('expandSymbol')[0].innerHTML = '▲'
        } else {
            target.parentNode.setAttribute('class', 'pageLinkCategory collapsed');
            target.getElementsByClassName('expandSymbol')[0].innerHTML = '▼'
        }
    },

    renderChildPageLinks: function(children) {
        return _.map(children, (child) => {
            return <Link className={cx('pageLink childPageLink', { activePage: this.state.currentPage === child.link })}
                    href={`${child.link}`}
                    onClick={this.getCurrentPage}>
                <div className='subpageTitle'>{child.name}</div>
                <div className='subpageSubtitle'>{child.subtitle}</div>
            </Link>;
        });
    },

    renderPageLinks: function() {
        return _.map(this.props.pages, (page) => {
            if (page.children) {
                const categoryActive = page.children.reduce((acc, val) => {
                    return acc || val.link === this.state.currentPage;
                }, false);
                return <div className={cx('pageLinkCategory', 'collapsed')}>
                    <div className={cx('pageLink', 'categoryTitle', { activePage: categoryActive })}
                            onClick={this.collapsePageGroup}
                            value='false'>
                        {page.name}
                        <div className='expandSymbol'>▼</div>
                    </div>
                    {this.renderChildPageLinks(page.children)}
                </div>;
            }
            if (page.ext) {
                return <a className={cx('pageLink')}
                            href={`${page.link}`}
                            onClick={this.getCurrentPage}>
                    {page.name}
                </a>;
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
                <h3 className='siteTitle'>Will Clark</h3>
                <Link className='portraitLink' href='/'>
                    <img className='portrait' src={profileImg}/>
                </Link>
                <h4 className='siteSubtitle'>Mechatronics Engineering Student</h4>

                <nav className='pageLinkList'>
                    {this.renderPageLinks()}
                </nav>
                <div className='mediaLinks'>
                    <a href='https://github.com/willdavidc'>
                        <i className="mediaLink fa fa-github" aria-hidden="true" />
                    </a>
                    <a href='mailto:fire@willclark.io'>
                        <i className="mediaLink mail fa fa-envelope" aria-hidden="true" />
                    </a>
                    <a href='https://www.linkedin.com/in/will-clark-04895a112/'>
                        <i className="mediaLink fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                </div>
                <div className='filler' />
                <p className='footer'><span>©</span> 2018 - Will Clark</p>
            </div>

        </div>;
    }
});

module.exports = TopBar;
