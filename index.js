const url = new URL("https://api.open-meteo.com/v1/forecast?");
const setParams = (lat, long) => ({
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
  temperature_unit: "fahrenheit",
  forecast_days: 1,
});

const params = new URLSearchParams(setParams(37.69, -122.3));
const query_string = params.toString();
const request_str = url + query_string;
console.log(request_str);

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

function json_to_dict(json) {}

data = getData(request_str).then((datu) => {
  console.log(datu.daily);
  return datu.daily.temperature_2m_max;
});

document.getElementById("output").textContent = data + "hhh"
