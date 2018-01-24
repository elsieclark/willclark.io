const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const SubHeading = createClass({

    render: function() {
        return (
            <div className='subheading'>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    },

});

module.exports = SubHeading;
