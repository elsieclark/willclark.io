const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Image = createClass({

    render: function() {
        return <div className='imageWrapper' style={{backgroundColor: (this.props.background || 'inherit')}}>
            <p className='caption'>{this.props.caption}</p>
            <div className='image'>
                <img src={this.props.src}
                     height={this.props.height}
                     width={this.props.width}/>
            </div>
        </div>;
    },

});

module.exports = Image;
