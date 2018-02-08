const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, err => {
    err ? console.log(`Error : ${err}`) : console.log(`Server listening on port : ${port}`);
});