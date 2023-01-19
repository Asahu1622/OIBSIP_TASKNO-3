



function convertTemperature() {
    var input = document.getElementById("temp-input").value;
    var type = document.getElementById("temp-type").value;
    var output;
    if (type == "celsius") {
      output = (input * 9/5) + 32 + "°F";
    } else if (type == "fahrenheit") {
      output = (input - 32) * 5/9 + "°C";
    } else if (type == "kelvin") {
      output = input - 273.15 + "°C";
    }
    document.getElementById("output").innerHTML = output;
  }
  