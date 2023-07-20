function convert() {
  const humidityInput = document.getElementById('humidityInput').value;

  if (!humidityInput || isNaN(humidityInput)) {
    alert('Please enter a valid number for Relative Humidity.');
    return;
  }

  const relativeHumidity = parseFloat(humidityInput);
  const airTemperature = 25; // Replace with the actual air temperature in Celsius.
  const dewPoint = calculateDewPoint(relativeHumidity, airTemperature);

  document.getElementById('result').textContent = `Dew Point: ${dewPoint.toFixed(2)}°C`;
}

function calculateDewPoint(relativeHumidity, airTemperature) {
  const a = 6.11;
  const b = 237.3;
  const alpha = (a * airTemperature) / (b + airTemperature);
  const saturationPoint = Math.pow(10, (7.5 * airTemperature) / (237.3 + airTemperature));
  const dewPoint = (b * (Math.log10(relativeHumidity * saturationPoint / 100.0) - alpha)) / (alpha - Math.log10(relativeHumidity * saturationPoint / 100.0));
  return dewPoint;
}
