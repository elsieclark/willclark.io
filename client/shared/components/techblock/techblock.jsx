const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const TechBlock = createClass({

    renderTech: function(tech) {
        if (tech.logo.startsWith('fa ')) {
            return <a href={tech.link}><div className='tech'>
                <i className={`techLogo ${tech.logo}`} aria-hidden='true' />
                <p className='techName'>{tech.name}</p>
            </div></a>;
        }
        return <a href={tech.link}><div className='tech'>
            <img className='techLogo' src={tech.logo} />
            <p className='techName'>{tech.name}</p>
        </div></a>;
    },

    renderTechs: function(techs) {
        return <div className='techsOuter'>
            <div className='techsLabel'><p>Technologies</p></div>
            <div className='techs'>
                {techs.map(this.renderTech)}
            </div>
        </div>;
    },

    renderLink: function(link) {
        if (link.logo.startsWith('fa ')) {
            return <a href={link.link}><div className='link'>
                <i className={`linkLogo ${link.logo}`} src={link.logo} aria-hidden='true' />
                <p className='linkName'>{link.name}</p>
            </div></a>;
        }
        return <a href={link.link}><div className='link'>
            <img className='linkLogo' src={link.logo} />
            <p className='linkName'>{link.name}</p>
        </div></a>;
    },

    renderLinks: function(links) {
        if (!links) {
            return;
        }
        return <div className='linksOuter'>
            <div className='linksLabel'><p>Links</p></div>
            <div className='links'>
                {links.map(this.renderLink)}
            </div>
        </div>;
    },

    render: function() {
        return (
            <div className='techBlockWrapper'>
                <div className='techBlock'>
                    {this.renderTechs(this.props.techs)}
                    {this.renderLinks(this.props.links)}
                </div>
            </div>
        );
    },

});

module.exports = TechBlock;
