import express from "express";

const app = express();
app.use(express.json());

const user = {
  name: "John Doe",
  role: "Developer",
  status: "learning",
};

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Express server!");
});

app.get("/about", (req, res) => {
  res.status(200).send("This is the about page.");
});
app.get("/user", (req, res) => {
  res.status(200).json(user);
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
