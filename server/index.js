import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
const __dirname = path.resolve();

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({name: "jai", age: 21})
})

app.listen(port, ()=> console.log(`Server running on PORT: ${port}`));