import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

// adding mongoose connection
let productsDb;
const dbName = productsDb;
const url = `mongodb://127.0.0.1:27017/${dbName}`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
