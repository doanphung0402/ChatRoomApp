const express = require("express");
var cors = require("cors");
const path = require("path");
var cookieParser = require("cookie-parser");
const app = express();
var socketio  = require("socket.io")
app.set('view engine', 'ejs')
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('Hello world')
 })
app.get("/chat",(req,res)=>{
   res.sendFile(path.join(__dirname,"file/chat.html")); 
})
const server =  app.listen(3000, () => {
  console.log("Example app is listening at port 3000 ");
});
var io =socketio(server); 
var socketController = require("./src/soketio")(io); 