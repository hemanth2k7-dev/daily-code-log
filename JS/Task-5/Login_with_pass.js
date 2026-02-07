/*Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

let login=prompt("LOGIN by?");
if (login=="Admin"||login=="admin"||login=="ADMIN") {
    let pass=prompt("Enter password");
    if (pass=="TheMaster") {
        alert("Welcome");
    }
    else if(pass=="" || pass==null){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if(login==" " || login==null){
    alert("Canceled");
}
else{
    alert("I don't know you");
}