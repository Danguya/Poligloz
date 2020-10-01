const express       = require('express');
const routes        = require('./routes');
const myServer      = express();
const PORT          = 3333;

myServer.use(routes);
myServer.use(express.json());

myServer.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})