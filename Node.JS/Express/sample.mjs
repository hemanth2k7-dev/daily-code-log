import express from "express";

const app = express();
app.use(express.json());

app.post('/users/:id', (req, res) => {
    console.log(req.method);                    // POST
    console.log(req.path);                      // /users/42
    console.log(req.params.id);                 // '42'
    console.log(req.query.sort);                // 'asc'
    console.log(req.body);                      // { name: 'Hem' }
    console.log(req.headers['authorization']);   // 'Bearer token'
    console.log(req.ip);                        // '192.168.1.1'

    res.json({ received: true });
});
// eg: URL: POST /users/42?sort=asc
// Body: { name: 'Hem' }

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
