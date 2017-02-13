var React = require('react');

var FilmList = require('./FilmList')
  
var CommentBox = React.createClass({
  render: function()
     return (
      <div className="film-box">
        <CommentList/>
      </div>
    );
  }  
});

module.exports = CommentBox;