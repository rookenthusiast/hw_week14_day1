var React = require('react');

var Film = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      <div className= "film">
        <p id= "title">{this.props.title}</p>
        <p id= "showtime">{this.props.showtime}</p>
      </div>
      );
  }
});

module.exports = Film;