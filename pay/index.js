const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const auhtRouter = require('./routes/sendmail');
const PORT = 5000;
const cors = require("cors");
@Crossorigin
app.use(cors(
    {
        origin:"https://payment-r17t.vercel.app"
    }
));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/auth', auhtRouter);
app.listen(PORT,()=>{
    console.log(`Server up at ${PORT}`);
});

