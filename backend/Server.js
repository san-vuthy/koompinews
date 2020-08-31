const express = require('express');
const cors = require('cors');
const colors = require('colors');
const schema = require('./graphql/schema/scheam');
const { graphqlHTTP } = require('express-graphql');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const connectDB = require('./config/db');
const app = express();

// app.use(auth);

app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 5 * 1024 * 1024 * 1024, //5MB max file(s) size
    },
  })
);
app.use(express.static('uploads'));
//Body Phaser
// app.use(express.json());
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
//EndPoint File Upload
app.post('/upload', async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file upload',
      });
    } else {
      let file = req.files.file;
      file.mv('./uploads/' + file.name);

      //send response
      res.send({
        status: true,
        message: 'file is Uploaded',
        data: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
        },
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use(
  '/graphql',
  // auth,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 8080;

//Conect to Database
connectDB();

app.listen(PORT, console.log(`Server running mode on ${PORT}`.yellow.bold));
