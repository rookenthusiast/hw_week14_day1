var React = require('react');
var Film = require('./Film.jsx');

propTypes: {
  data: React.PropTypes.array.isRequired
}

var FilmList = React.createClass({


  render: function() {
    var filmNodes = this.props.data.map(function (film){
      return (
        <Film title={ film.title } key={film.id} showtime={film.showtime}>
        </Film>
        )
    });

      return (
        <div className="film-list">
        { filmNodes }
        <p type="button">See more opening this week</p>
        </div>
        );
  }

});

module.exports = FilmList;