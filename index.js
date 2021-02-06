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

const url = `mongodb://127.0.0.1:27017/productsDb`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "productsDb"
}).then(() => {
    console.log("database conncetion ready");
}).catch(error => {
    console.log(error);
    throw new Error("No  connection to mongo detected");
})

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
