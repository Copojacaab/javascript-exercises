const convertToCelsius = function(farenightTemperature) {
  let celsiusConversion =  (farenightTemperature - 32) * (5 / 9);
  celsiusConversion = Math.floor(celsiusConversion * 10) / 10;
  return celsiusConversion;
};

const convertToFahrenheit = function(celsiusTemperature) {
  let farenightConversion = (celsiusTemperature * (9/5)) + 32;
  farenightConversion = Math.floor(farenightConversion * 10) / 10;
  return farenightConversion;
};

console.log(convertToFahrenheit(73.2));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
