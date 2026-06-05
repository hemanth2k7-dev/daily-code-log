import express from "express";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

function logger(req, res , next) {
  //Logging middleware
  const currTime = new Date().toISOString();
  console.log(`Received request: ${req.method} ${req.url} at   ${currTime}`);
    next();
}

function authCheck(req, res, next) {
  //Authentication middleware
  const token = req.headers["x-auth"];
  if (token !== "secret123") {
    return res.status(401).send("Unauthorized");
  }
  next();
}

function bodyValidator(req, res, next) {
  //Body validation middleware
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send("Bad Request: Body is required");
  }
  next();
}

app.use(logger); //Calls Logger

app.use(authCheck); //Calls Auth checker

app.post("/data", bodyValidator, (req, res) => {
  const data = req.body;
  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
