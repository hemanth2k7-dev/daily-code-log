async function getUser() {
  let username = document.getElementById("username").value;//getElementById is used to get the value of the input field
  if (username.trim() == "") {
    alert("Please enter a username");
    return;//return is used to exit the function when the username is not entered
  }
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();//json is used to parse the response as JSON object
    console.log(`Name: ${data.name}`);
    console.log(`Followers: ${data.followers}`);
    console.log(`Public Repos: ${data.public_repos}`);//public_repos is used to get the number of public repositories of the user
  } catch (FileNotFoundError) {
    console.log("Username not found");//FileNotFoundError is used to handle the error when the username is not found
  }
}