const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

connectDB();

/* const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
} */

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/logged', require('./routes/logged'));

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
