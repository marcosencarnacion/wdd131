document.addEventListener('DOMContentLoaded', () => {
    // Footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;
  
    // Static Weather Data
    const temperature = 15; // En grados Celsius
    const windSpeed = 20; // En km/h
  
    document.getElementById('temperature').textContent = `${temperature} °C`;
    document.getElementById('wind').textContent = `${windSpeed} km/h`;
  
    // Calculate Wind Chill
    function calculateWindChill(temp, wind) {
      return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
      ).toFixed(1);
    }
  
    let windChill = 'N/A';
    if (temperature <= 10 && windSpeed > 4.8) {
      windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
    }
    document.getElementById('windChill').textContent = windChill;
  
    // Conditions
    document.getElementById('conditions').textContent = "Partly Cloudy";
  });