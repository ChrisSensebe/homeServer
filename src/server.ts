const app = require('./app');
const port = process.env.PORT || 8080;

app.listen(port, err => {
    err ? console.log(`Error : ${err}`) : console.log(`Server listening on port : ${port}`);
});