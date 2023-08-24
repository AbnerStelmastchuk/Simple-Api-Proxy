const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000; // Use uma porta diferente do Serviço A

app.get('/call-service-a-c', async (req, res) => {
  try {
    const response = await axios.get('http://servicejs-a/call-api'); // Faz uma chamada ao Serviço A
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao chamar o Serviço A-C' });
  }
  try {
    const response = await axios.get('http://servicejs-c/call-api-error'); // Faz uma chamada ao Serviço A
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao chamar o Serviço A-C' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});