const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const QuadImage = createClass({



    renderImage: function(image) {
        return <div className='imageBox'><img src={image.src} height={image.height} width={image.width}/></div>;
    },

    render: function() {
        return <div className='quadImageWrapper'>
            <div className='quadImage'>
                {this.props.images.map(this.renderImage)}
            </div>
            <p className='caption'>{this.props.caption}</p>
        </div>;
    },

});

module.exports = QuadImage;
