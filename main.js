const url = new URL("https://api.open-meteo.com/v1/forecast?");
const setParams = (lat, long) => ({
  latitude: lat,
  longitude: long,
  daily: "temperature_2m_max",
  temperature_unit: "fahrenheit",
  forecast_days: 1,
});

const params = new URLSearchParams(setParams(37.69, -122.3));
const query_string = params.toString();
const request_str = url + query_string;
console.log(request_str);

fetch(request_str)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
