const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
const colors = require('colors');
const schema = require('./graphql/schema/scheam');
const { graphqlHTTP } = require('express-graphql');
const auth = require('./middleware/auth');

const connectDB = require('./config/db');

//Route file
// const user = require('./routes/auth');

//Conect to Database
connectDB();
const app = express();

//Body Phaser
app.use(express.json());
// app.use(auth);
app.use(
  '/graphql',
  graphqlHTTP((req) => ({
    schema,
    graphiql: true,
    context: {
      user: req.user,
    },
  }))
);

//Laod env vars
// dotenv.config({ path: './config/config.env' });

//Dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }
//Mount Route
// app.use('/api/v1/auth', user);

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
