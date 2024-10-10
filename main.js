const url = "https://api.open-meteo.com/v1/forecast?";
const params = new URLSearchParams();
params.append("latitude", "40.71");
params.append("longitude", "-74");
params.append("daily", "temperature_2m_max");
params.append("temperature_unit", "fahrenheit");
params.append("forecast_days", 1);
const query_string = params.toString();
const request_str = url + query_string;
console.log(request_str);

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData(request_str);
