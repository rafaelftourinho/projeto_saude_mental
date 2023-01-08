const app = require('./app');

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

module.exports = app;
