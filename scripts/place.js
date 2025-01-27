document.addEventListener('DOMContentLoaded', () => {
  // Footer: Display the current year and the last modified date
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;

  // Static weather data
  const temperature = 10; // Temperature in Celsius
  const windSpeed = 5; // Wind speed in km/h
  const conditions = "Partly Cloudy"; // Weather condition (static value)

  // Function to calculate wind chill
  function calculateWindChill(temp, wind) { return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1); }

  // Calculate and display wind chill
  let windChill = 'N/A'; // Default value
  if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
  }

  // Update the weather section
  document.getElementById('temperature').textContent = `${temperature} °C`;
  document.getElementById('wind').textContent = `${windSpeed} km/h`;
  document.getElementById('windChill').textContent = windChill;
  document.getElementById('conditions').textContent = conditions;
});
