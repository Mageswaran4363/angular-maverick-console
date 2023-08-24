function myFunction() {
  alert("Button clicked!");
}
document.addEventListener("DOMContentLoaded", function() {
  // Add click event listeners to the buttons
  const shotButton = document.getElementById("shot-button");
  if (shotButton) {
    shotButton.addEventListener("click", function() {
      alert("Shot button clicked!");
    });
  }
});
