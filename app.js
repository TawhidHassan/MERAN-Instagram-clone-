const  express = require('express');
const mongoose = require('mongoose')
require('./models/user')
require('./models/post')

const app=express();
const PORT=5000;

mongoose.connect('mongodb://localhost:27017/instragram', {useNewUrlParser: true, useUnifiedTopology: true});
//Middleware
app.use(express.json())

app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, () => {
    console.log(`Server started on port`);
});
