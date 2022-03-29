import axios from "axios";

const weatherNow = "https://api.m3o.com/v1/weather/Now";
const weatherForecast = "https://api.m3o.com/v1/weather/Forecast";
const API_TOKEN = "ZmJlNWFhYjEtNGQ0NC00YjhjLWI0MmMtNTI4MzRiNmZkOGFk";

const locationInject = $("#location");
const tempNow = $("#temp-now");
const tempLater = $("#temp-later");
const nowIcon = $("#now-icon");
const laterIcon = $("#later-icon");

$(".later-container").click(function () {
    window.location.href =
        "https://weather.com/weather/hourbyhour/l/80fbe414f8555a5a5efc1e10b1e2f7a6274b03a4ebffccaea5385bd4b97e265f";
});
$(".now-container").click(function () {
    window.location.href =
        "https://weather.com/weather/hourbyhour/l/80fbe414f8555a5a5efc1e10b1e2f7a6274b03a4ebffccaea5385bd4b97e265f";
});

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
        console.log(response.data);
        locationInject.text(
            response.data.location + ", " + response.data.region
        );
        tempNow.text(
            response.data.condition + " " + response.data.temp_f + "° F"
        );
        nowIcon.attr("src", response.data.icon_url);
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
        console.log(response.data);
        laterIcon.attr("src", response.data.forecast[0].icon_url);
        tempLater.text(
            response.data.forecast[0].condition +
                " Max: " +
                response.data.forecast[0].max_temp_f +
                "° F"
        );
    });
