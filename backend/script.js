const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors');

const app = express();
connectToMongo();

// app.get("/",(req, res) => {
//     res.send("hello");
// })
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(require('./routes/auth'))
app.use(require('./routes/todo'))

app.listen(5000, () => {
    console.log(`listening on port http://localhost:5000`)
})