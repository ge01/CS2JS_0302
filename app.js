document.getElementById("myBtn").addEventListener("click", function(){
  computeMPG();
});

function computeMPG() {
  // Get the miles driven and assign it to the miles variable.
  var miles = document.getElementById('miles').value;

  // Get the gallons used and assign it to the gallons variable.
  var gallons = document.getElementById('gallons').value;

  // Calculate MPG
  var mpg = miles / gallons;

  // Display MPG
  document.getElementById('outMPG').innerHTML = "Your car's MPG: " + mpg.toFixed(2);
}
