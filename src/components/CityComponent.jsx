import { useState, useEffect } from "react";

import "../styles/CityComponent.css";
import Celsius from "../images/temperature.png";
import Wind from "../images/wind.png";

function CityComponent(props) {
  const [weatherData, setWeatherData] = useState({});
  const [actualCity, setActualCity] = useState("");

  const day = new Date().getDay()

  const dayOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
    "Segunda-feira",
    "Terça-feira"
  ];

  useEffect(async () => {
    if (props.actualCity !== "") {
      await fetch(`https://goweather.herokuapp.com/weather/${props.actualCity}`)
        .then((data) => data.json())
        .then((data) => {
          setWeatherData(data);
          setActualCity(props.actualCity);
        });
    }
  }, [props.actualCity]);

  return (
    <div>
      {Object.keys(weatherData).length > 0 && (
        <>
          <main className="main">
            <h1>{actualCity}</h1>
            <section className="current-weather">
              <h2>Tempo atual</h2>
              <p>{weatherData.temperature}</p>
              <p>{weatherData.description}</p>
            </section>

            <section className="forecast">
              <h2>Previsão</h2>
              <ol>
                {weatherData.forecast.map((city, index) => (
                  <li key={index}>
                    <h3>
                      {city.day == 1
                        ? "Amanhã"
                        : dayOfWeek[day + parseInt(city.day)]}
                    </h3>
                    <div className="temperature">
                      <img src={Celsius} alt="Símbolo de temperatura" />
                      <p>{city.temperature}</p>
                    </div>
                    <div className="wind">
                      <img src={Wind} alt="Símbolo de vento" />
                      <p>{city.wind}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default CityComponent;
