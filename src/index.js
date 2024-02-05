const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connectDB');
const routes = require('./routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200,
// };

const allowlist = ['http://localhost:3000'];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptionsDelegate));
app.use(helmet());
app.use(morgan('dev'));
connectDB();
app.use('/api/v1/', routes);
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
