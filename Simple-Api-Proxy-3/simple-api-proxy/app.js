const express = require('express');
const axios = require('axios');

const app = express();
const port = 3200;


app.get('/call-api-error', async (req, res) => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/4e405d01-a471-4490-b4df-55342eb7c02a');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao chamar a API externa' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
