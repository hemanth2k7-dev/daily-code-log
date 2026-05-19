import express from "express";

const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Hem", role: "developer" },
  { id: 2, name: "John", role: "designer" },
  { id: 3, name: "Sara", role: "developer" },
];

// Route param — get specific user
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Query string — filter users by role
app.get("/users", (req, res) => {
  const { role } = req.query;
  if (role) {
    const filtered = users.filter((u) => u.role === role);
    return res.json(filtered);
  }
  res.json(users);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
