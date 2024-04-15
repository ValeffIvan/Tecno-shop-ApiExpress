const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})
