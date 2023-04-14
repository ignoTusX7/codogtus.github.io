// navbar

function error(){
    alert("This site under maintenance");
}

function validateForm() {
    let name = document.forms["cont_form"]["fname"].value;
    let email = document.forms["cont_form"]["email"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  }