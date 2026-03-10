async function login1234(pin) {
  try {
    let promise = new Promise((resolve, reject) => {
      if (pin === 1234) {
        resolve("Login Success");
      } else {
        reject("Invalid Password");
      }
    });
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);//Outputs an error log message
  }
}
let pin = Number(prompt("Enter pin"));
login1234(pin);