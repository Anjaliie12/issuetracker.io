const express = require('express');
const app = express();

//importing routers
const userRouter = require('./routers/userRouters');
const cors = require('./routers/userRouter');

//parse json data
app.use(express.json());

//adding routes
app.use('/user',userRouter);

const port = 5000;

app.get('/',(req,res) => {
    res.send('Working Perfectly');
});

app.get('/add', (req, res) => {
    res,send('Response from user Routers');
});

// getall

app.listen(port,() => {console.log('server started!!');});
