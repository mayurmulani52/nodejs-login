const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express();

app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

app.use(bodyParser.json());

// for DB configuration
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  
const port = 5000; // port selection
app.listen(port, () => console.log(`Server up and running on port ${port} !`));