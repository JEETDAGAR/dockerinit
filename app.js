const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from JEET DAGAR</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
