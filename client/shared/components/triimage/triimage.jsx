const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const TriImage = createClass({

    renderImage: function(image) {
        return <div className='imageBox'><img src={image.src} height={image.height} width={image.width}/></div>;
    },

    render: function() {
        return <div className='triImageWrapper'>
            <div className='triImage'>
                {this.props.images.map(this.renderImage)}
            </div>
            <p className='caption'>{this.props.caption}</p>
        </div>;
    },

});

module.exports = TriImage;
