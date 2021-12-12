require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
//2-connect db
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/rest-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
  console.log("DB connected");
})
.catch((e) => {
  console.log("No connection", e);
});

//4-Body-parser
 app.use(express.json());

   //3-routes
  app.use("/User",require('./routes/users'))
  //1-run server
const port =(process.env.PORT || 5000);
app.listen(port, err => {
  err? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});
