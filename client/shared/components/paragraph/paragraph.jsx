const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const TitleBlock = createClass({

    render: function() {
        const style = { marginTop: this.props.height || 0 };
        return (
            <div className='paragraph' style={{style}}>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    },

});

module.exports = TitleBlock;
