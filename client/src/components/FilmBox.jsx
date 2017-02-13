var React = require('react');

var FilmList = require('./FilmList')
  
var FilmBox = React.createClass({
  render: function()
     return (
      <div className="film-box">
        <FilmList/>
      </div>
    );
  }  
});

module.exports = FilmBox;