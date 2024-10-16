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

async function get_location() {
  lat = document.getElementById("latitude").value;
  long = document.getElementById("longitude").value;
  return [lat, long];
}

const params = new URLSearchParams();
const query_string = params.toString();
const request_str = url + query_string;
console.log(request_str);

async function getData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

getData(request_str)
  .then((response) => {
    fill_page(response);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

//document.getElementById("output").textContent = data + "hhh"
function fill_page(data) {
  console.log(data);
  document.getElementById("max_temp").textContent =
    data.daily.temperature_2m_max;
}
