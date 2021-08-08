const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const users = require('./routes/users')
const auth = require('./routes/auth')
const express = require('express')
const app = express();

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/playground')
        .then(()=> console.log('Connected to MongoDb....'))
        .catch(error=> console.log('Could not connect to MongoDb....'))

app.use(express.json());
app.use('/api/users',users);
app.use('/api/auth',auth);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}....`))


