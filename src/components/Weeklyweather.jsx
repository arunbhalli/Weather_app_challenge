import React from "react";
import { Grid,Header} from "semantic-ui-react";

// weekend challenge
const Weeklyweather = ({ dailyWeather }) => {
  
  const forecastList = [];
  for (let i = 1; i < dailyWeather.length; i++) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let weather = dailyWeather[i].weather[0].main;
    forecastList.push(
      <Grid.Column key={i} textAlign="center" data-cy="seven-days-list-items">
        <Header.Content data-cy="week-day" className="days">
          {days[new Date(dailyWeather[i].dt * 1000).getDay()]}
        </Header.Content>
        <Header.Content data-cy="daily-weather">{dailyWeather[i].weather[0].description}</Header.Content>
        <Header.Content data-cy="daily-temp">{dailyWeather[i].temp.day}°C</Header.Content>
      </Grid.Column>
    );
  }

  return (
    <Grid columns={7} divided id="hou" >
      <Grid.Row data-cy="seven-days-list" >{forecastList}</Grid.Row>
    </Grid>
  );
};

export default Weeklyweather;