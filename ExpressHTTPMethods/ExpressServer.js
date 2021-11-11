const app = require('./app');
const port = 2000;
const hostName = '127.0.0.1';

app.listen(port, ()=>{
    console.log(`Express Server is running on http://${hostName}:${port}`);
}); 