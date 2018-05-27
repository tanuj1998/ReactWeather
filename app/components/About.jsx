var React = require('react');

var About = React.createClass({
  render: function () {
    return(
      <div>
        <h1 className="text-center">About</h1>
        <p>This page displays the current weather for any part of the world.
        This whole app has been made using REACT,JS and CSS. I have also
      called the openWeatherMap API to help find the weather.</p>
    <p> Some of the tools and frameworks I used are:</p>
      <ul>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a>
        </li>
      </ul>
      </div>

    );
  }
});

module.exports = About;
