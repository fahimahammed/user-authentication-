const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/assignment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;

connect.on("open", () => {
    console.log("DB connected... ");
})


app.use(express.json());
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const userRouter = require('./routes/user');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leader', leaderRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
})