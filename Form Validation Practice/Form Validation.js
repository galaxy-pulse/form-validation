// Validations, Logical Operators


function validateTextbox() {

    var box1 = document.getElementById("name");
    var box2 = document.getElementById("address");

   /* if (box1.value == "" || box2.value == "") {                          //Blank space = null     -     || is the OR operator

        alert("The field cannot be blank.");
        return false;

    } */

    if (box1.value.length < "5" || box2.value.length < "5") {                          //This is for length

        alert("Please enter at least 5 characters.");
        box1.focus();
        box1.style.border = "solid 3px red";
        return false;

    }

}