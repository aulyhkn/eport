const express = require('express');
const cors = require('cors');
const db = require('./providers/db');
const routers = require('./providers/routers');

const run = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  await db();
  
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routers(app);

  app.listen(port, () => console.log(`Using port ${port}`));
}

run();