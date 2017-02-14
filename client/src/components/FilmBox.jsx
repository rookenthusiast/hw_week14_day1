var React = require('react');

var FilmList = require('./FilmList')

var films = [
{id: 1, title: "Sausage Party", showtime: "Showtimes"},
{id: 2, title: "Café Society", showtime: "Showtimes"},
{id: 3, title: "Morgan", showtime: "Showtimes"},
{id: 4, title: "The 9th Life of Louis Drax", showtime: "Showtimes"},
{id: 5, title: "Naam Hai Akira", showtime: "Showtimes"},
{id: 6, title: "Equity", showtime: "Showtimes"},
{id: 7, title: "Things to Come", showtime: "Showtimes"}
];

var FilmBox = React.createClass({

  getInitialState: function(){
    return {data: films};
  },

  render: function() {
   return (
    <div className="film-box">
    <h2>UK Opening This Week</h2>

    <hr/>

    <FilmList data={this.state.data}/>

    <hr/>

    <button className="button-showtimes" type="button">Click me
    </button>
    </div>
    );
 }  
});

module.exports = FilmBox;