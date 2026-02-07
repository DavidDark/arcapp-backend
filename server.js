const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    }
}));

app.get('/', (req, res) => {
    res.send("Hello")
});

//Routes
app.use('/users', require('./routes/user'));
app.use('/products', require('./routes/product'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});