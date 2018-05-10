var React = require('react');
var Lorem = require('react-lorem-component');

var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <Lorem />
      </div>
    );
  }
});
