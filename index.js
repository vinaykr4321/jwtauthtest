const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// ROUTER
const userRouter = require('./routes/users');

// CONFIG DOTENV
dotenv.config();

// MONGOOSE SETUP
mongoose.set('debug', true);
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('DB connected!'));

// MIDDLEWARES
app.use(express.json());

app.use('/api/v1', userRouter);


app.listen(process.env.PORT, () => console.log(`Server is up and running on Port: ${process.env.PORT}`));