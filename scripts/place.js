document.addEventListener('DOMContentLoaded', () => {
  // Footer
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;

  // Static Weather Data
  const temperature = 15; // In Celsius
  const windSpeed = 20; // In km/h
  const conditions = "Partly Cloudy"; // Example condition

  document.getElementById('temperature').textContent = `${temperature} °C`;
  document.getElementById('wind').textContent = `${windSpeed} km/h`;
  document.getElementById('conditions').textContent = conditions;

  // Calculate Wind Chill
  function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
  }

  let windChill = 'N/A';
  if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
  }
  document.getElementById('windChill').textContent = windChill;

  // Set Weather Icon
  const weatherIcon = document.getElementById('weatherIcon');

  // Set icon based on conditions
  if (conditions === "Partly Cloudy") {
    weatherIcon.classList.add("bi-cloud-sun"); // Add the icon class for Partly Cloudy
  } else if (conditions === "Clear") {
    weatherIcon.classList.add("bi-sun"); // Add the icon class for Clear
  } else if (conditions === "Rainy") {
    weatherIcon.classList.add("bi-cloud-rain"); // Add the icon class for Rain
  } else {
    weatherIcon.classList.add("bi-cloud"); // Default icon
  }
});
