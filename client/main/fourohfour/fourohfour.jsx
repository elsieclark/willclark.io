const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Break      = require('../../shared/components/break/break.jsx');
const P          = require('../../shared/components/paragraph/paragraph.jsx');
const TitleBlock = require('../../shared/components/titleblock/titleblock.jsx');

const fourOhFourImg = ('./assets/assets/404.jpg');

const Fourohfour = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    render: function() {
        return <div className='fourohfour'>
            <TitleBlock name='404 - Page Not Found' />
            <img src={fourOhFourImg}/>
        </div>;
    }
});

module.exports = Fourohfour;
