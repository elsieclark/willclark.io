const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const PageBody = createClass({

    render: function() {
        return (
            <div className='pagebody'>
                {this.props.children}
            </div>
        );
    },

});

module.exports = PageBody;
