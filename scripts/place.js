let temperature = 5; // in Celsius
let windSpeed = 10; // in km/h

function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula for metric units (Celsius and km/h)
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Return rounded result
    } else {
        return "N/A"; // If conditions aren't met
    }
}

// Calculate and display the wind chill
document.addEventListener('DOMContentLoaded', function() {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;