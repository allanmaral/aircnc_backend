const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const routes = require('./routes'); 
const path = require('path');

require('dotenv/config');

const app = express();

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);