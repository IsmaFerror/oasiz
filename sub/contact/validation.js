function validation(ev) {
  // there is no input named name
  //var nameValue = document.getElementById("name").value
  var nameValue = "test";
  var email = document.getElementById("email").value
  var confEmail = document.getElementById("confirmarEmail").value
  if(email !== confEmail) {
    ev.preventDefault
    window.alert("Los emails deben de ser iguales!")
    return false;
  } else {
    if (confirm("Enviar formulario?") == true) { return true; } 
    else { return false; }
  }
}