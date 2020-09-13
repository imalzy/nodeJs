const http = require("http");
const todo = [
  { id: 1, text: "todo One" },
  { id: 2, text: "todo Two" },
  { id: 3, text: "todo Three" },
  { id: 4, text: "todo Four" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "DevNodeJs");
  res.end(JSON.stringify({
    success : true,
    data : todo
  }));
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
