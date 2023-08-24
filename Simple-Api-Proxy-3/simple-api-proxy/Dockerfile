# Use uma imagem Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta que a aplicação Node.js utiliza
EXPOSE 3100

# Comando para iniciar a aplicação
CMD [ "node", "app.js" ]
