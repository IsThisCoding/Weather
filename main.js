const url = "https://api.open-meteo.com/v1/forecast?"
const params = new URLSearchParams()
params.append("latitude", "40.71")
params.append("longitude", "74")
params.append("daily", "temperature_2m_max")
params.append("forecast_days", 1)
const query_string = params.toString()
const request_str = url + query_string
console.log(request_str)
