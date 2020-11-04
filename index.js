const express = require('express');
const routes  = require('./routes/index');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(routes);
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
