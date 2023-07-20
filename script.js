function convert() {
    const humidityInput = document.getElementById('humidityInput').value;
  
    if (!humidityInput || isNaN(humidityInput)) {
      alert('Please enter a valid number for Relative Humidity.');
      return;
    }
  
    const relativeHumidity = parseFloat(humidityInput);
    const dewPoint = calculateDewPoint(relativeHumidity);
  
    document.getElementById('result').textContent = `Dew Point: ${dewPoint.toFixed(2)}°C`;
  }
  
  function calculateDewPoint(relativeHumidity) {
    // This is a simple approximation formula for the Dew Point calculation.
    // For more accurate results, use more advanced equations.
    const temperature = 25; // Replace with the actual temperature in Celsius.
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temperature) / (b + temperature)) + Math.log(relativeHumidity / 100.0);
    const dewPoint = (b * alpha) / (a - alpha);
    return dewPoint;
  }
  