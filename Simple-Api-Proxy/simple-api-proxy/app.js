const express = require('express');
const axios = require('axios');

const app = express();
const port = 3100;


app.get('/call-api', async (req, res) => {
  try {
    // Chama a API externa (substitua a URL pela API que você deseja chamar)
    const response = await axios.get('https://run.mocky.io/v3/bef53a89-f67a-4315-b657-7620399616d2');

    // Retorna um status HTTP 200 e os dados da resposta da API
    res.status(200).json(response.data);
  } catch (error) {
    // Em caso de erro, retorna um status HTTP 500
    res.status(500).json({ error: 'Erro ao chamar a API externa' });
  }
});

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
