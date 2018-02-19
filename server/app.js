const express = require('express');
const cors = require('cors');

const db = require('./db/DataBase');
db.setConnection();
const { serverPort } = require('../configs/server.json');

const app = express();
app.use(cors({ origin: '*' }));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hallo!');
});

const Routes = require('./routes');
Routes(app);

app.listen(serverPort, () => {
   console.log(`listening port ${serverPort}`);
});