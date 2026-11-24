function checkForm() {
  var name = document.getElementById("name").value;
  document.getElementById("message").textContent = "Thank you, " + name + ". Your appointment request is received.";
  return false;
}