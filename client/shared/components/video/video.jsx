const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Video = createClass({

    render: function() {
        return (
            <div className='videoBox'>
                <iframe
                    className='video'
                    src={this.props.src}
                    frameborder='0'
                    allowfullscreen />
            </div>
        );
    },

});

module.exports = Video;
