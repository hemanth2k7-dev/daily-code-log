async function loadProfile() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Profile loaded");
    }, 1000);
  });
  return promise;
}
async function loadNotifications() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Notifications loaded");
    }, 2000);
  });
  return promise;
}
async function loadMessages() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Messages loaded");
    }, 3000);
  });
  return promise;
}
async function loadDashboard() {
  console.log("Loading dashboard...");
  let Results=Promise.all([loadProfile(), loadNotifications(), loadMessages()]);
  Results.then(
    (responses) => responses.forEach((response) => console.log(response))
  );
  await Results;
  console.log("Dashboard ready")
}

loadDashboard();