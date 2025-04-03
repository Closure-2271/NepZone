const express = require('express');
const axios = require('axios');
const app = express();

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://cc01.plusai.io/');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching page');
  }
});

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
