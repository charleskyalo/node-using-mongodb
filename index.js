import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

// adding mongoose connection

mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "productsDb"
})


app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
