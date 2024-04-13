const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();

const app = express()
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())

//available ports
app.get("/test", async (req, res) => {
  try {
    res.json('Test Working!!');
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
app.use('/api',require('./routes/forms'))

app.listen(port, () => {
  console.log(`My App listening at http://localhost:${port}`)
})