import axios from "axios";

const weatherNow = "https://api.m3o.com/v1/weather/Now";
const weatherForecast = "https://api.m3o.com/v1/weather/Forecast";
const API_TOKEN = "ZmJlNWFhYjEtNGQ0NC00YjhjLWI0MmMtNTI4MzRiNmZkOGFk";

axios
    .get(weatherNow, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN,
        },
        params: {
            location: "60174",
        },
    })
    .then(function (response) {
        console.log(response.data.data);
    });
