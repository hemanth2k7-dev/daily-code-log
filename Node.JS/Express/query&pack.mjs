import express from "express";

const app = express();
app.use(express.json());

app.get("/search", (req, res) => {
  const Q = req.query.name;
  if (Q) {
    let result = { searched: Q };
    return res.status(200).json(result);
  }
   res.status(400).send("Please provide a name query parameter");
});

app.get("/user/:id", (req, res) => {
  const result = { id: Number(req.params.id) };
  res.status(200).json(result);
});

app.use((req, res) => {
  res.status(404).send("Unable to get anything");
});

app.listen(3000, () => {
  console.log("Check out on : http://localhost:3000");
});
