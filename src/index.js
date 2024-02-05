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

const whitelist = ['http://localhost:3000', 'https://spectacular-blini-a8571f.netlify.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));
connectDB();
app.use('/api/v1/', routes);
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
