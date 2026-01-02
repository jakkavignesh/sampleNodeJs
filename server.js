const express = require('express');
const os = require('os');

const app = express();
const PORT = 5000;

// Function to get the server's IP address
function getServerIP() {
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let alias of interfaces[iface]) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'IP not found';
}

app.get('/', (req, res) => {
  const serverIP = getServerIP();
  res.send(`Hello! This server is running on IP: ${serverIP}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
