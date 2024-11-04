const url = new URL("https://api.open-meteo.com/v1/forecast?");
const setParams = (lat, long, units = "fahrenheit") => ({
  latitude: lat,
  longitude: long,
  daily: [
    "temperature_2m_max",
    "temperature_2m_min",
    "apparent_temperature_max",
    "apparent_temperature_min",
    "sunrise",
    "sunset",
    "uv_index_max",
    "precipitation_sum",
    "precipitation_probability_max",
    "wind_speed_10m_max",
  ],
  temperature_unit: units,
  forecast_days: 1,
});

function genUrl(url) {
  lat = document.getElementById("latitude").value;
  long = document.getElementById("longitude").value;
  const params = new URLSearchParams(setParams(lat, long));
  const request_str = url + params.toString();
  return request_str;
}

async function getData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

function run() {
  getData(genUrl(url))
    .then((response) => {
      fill_page(response);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}

function fill_page(data) {
  console.log(data);
  document.getElementById("max_temp").innerHTML =
    `High Temperature: ${data.daily.temperature_2m_max}`;
  document.getElementById("min_temp").innerHTML =
    `Low Temperature: ${data.daily.temperature_2m_min}`;
  document.getElementById("real_feel_max").innerHTML =
    `Real Feel High: ${data.daily.apparent_temperature_max}`;
  document.getElementById("real_feel_min").innerHTML =
    `Real Feel Low: ${data.daily.apparent_temperature_min}`;
  document.getElementById("sunrise").innerHTML =
    `Sunrise Time: ${data.daily.sunrise}`;
  document.getElementById("sunset").innerHTML =
    `Sunset Time: ${data.daily.sunset}`;
  document.getElementById("uv_index").innerHTML =
    `UV Index: ${data.daily.uv_index_max}`;
  document.getElementById("precip").innerHTML =
    `Precipitation Amount: ${data.daily.precipitation_sum}`;
  document.getElementById("precip_chance").innerHTML =
    `Precipitation Chance: ${data.daily.precipitation_probability_max}`;
  document.getElementById("wind_speed").innerHTML =
    `Wind Speed: ${data.daily.wind_speed_10m_max}`;
}
