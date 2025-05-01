const express = require('express');
const app = express();

// Proxy to Shell Shockers (or any other game URL)
app.get('*', (req, res) => {
  const targetUrl = 'https://shellshock.io' + req.url;
  req.pipe(request(targetUrl)).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy server running at http://localhost:3000');
});
