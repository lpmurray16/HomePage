import React, { useState } from "react";
import axios from "axios";

const WeatherComponent = () => {
    const weatherNow = "https://api.m3o.com/v1/weather/Now";
    const weatherForecast = "https://api.m3o.com/v1/weather/Forecast";
    const API_TOKEN = "ZmJlNWFhYjEtNGQ0NC00YjhjLWI0MmMtNTI4MzRiNmZkOGFk";

    const [location, setLocation] = useState("Saint Charles, IL");
    const [nowTemp, setNowTemp] = useState("");
    const [nowIcon, setNowIcon] = useState("");
    const [laterIcon, setLaterIcon] = useState("");
    const [laterTemp, setLaterTemp] = useState("");

    axios
        .get(weatherNow, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_TOKEN,
            },
            params: {
                location: "Saint Charles, IL",
            },
        })
        .then(function (response) {
            // console.log(response.data);
            setLocation(response.data.location + ", " + response.data.region);
            setNowTemp(
                response.data.condition + " " + response.data.temp_f + "° F"
            );
            setNowIcon(response.data.icon_url);
        });
    axios
        .get(weatherForecast, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + API_TOKEN,
            },
            params: {
                location: "Saint Charles, IL",
            },
        })
        .then(function (response) {
            // console.log(response.data);
            setLaterIcon(response.data.forecast[0].icon_url);
            setLaterTemp(
                response.data.forecast[0].condition +
                    " Max: " +
                    response.data.forecast[0].max_temp_f +
                    "° F"
            );
        });

    return (
        <div className="weather-container">
            <h2 id="location">{location}</h2>
            <div className="now-container">
                <p>NOW</p>
                <img id="now-icon" src={nowIcon} alt="Current Weather Icon" />
                <p id="temp-now">{nowTemp}</p>
            </div>
            <div className="later-container">
                <p>LATER TODAY</p>
                <img
                    id="later-icon"
                    src={laterIcon}
                    alt="Forecasted Weather Icon"
                />
                <p id="temp-later">{laterTemp}</p>
            </div>
        </div>
    );
};

export default WeatherComponent;
