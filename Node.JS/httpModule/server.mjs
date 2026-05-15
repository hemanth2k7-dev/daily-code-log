import http from "http";

const user = {
  name: "John Doe",
  role: "Developer",
  status: "learning",
};

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my server!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page.");
  } else if (req.url === "/user" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
