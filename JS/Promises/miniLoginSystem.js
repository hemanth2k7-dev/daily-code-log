function login1234(pin) {
    return new Promise((resolve,reject)=>{
        if (pin===1234) {
            resolve("Login Success");
        } else {
            reject("Invalid Password");
        }
    });
}
let pin=Number(prompt("Enter pin"));
login1234(pin)
    .then(result=>console.log(result))
    .catch(err=>console.log(err));