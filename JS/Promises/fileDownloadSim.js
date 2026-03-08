const download = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Download Complete"), 2000);
  });
};
download().then((result) => console.log(result));
console.log("Downloading...");