module.exports = function(io){ 
    var username = []; 
    io.sockets.on("connection",(socket)=>{
         console.log("co mot user ket noi")
         //listen add user
         socket.on("adduser",(username)=>{
              socket.username= username; 
              var data = {
                   sendor:"SERVER", 
                   message:"You have john to chatroom"
              }
            socket.emit("updatemessage",data); 
             
            var data = {
                 sendor :"SERVER", 
                 message: username +" have join to chat room"
            }; 
            socket.broadcast.emit("updatemessage",data); 
            
         }); 
         socket.on("sendmessage",(message)=>{
              var data = { 
                  sendor : "You", 
                  message : message 
              }; 
              socket.emit("updatemessage",data); 
              var data = {
                   sendor : socket.username, 
                   message:message
              }
            socket.broadcast.emit("updatemessage",data); 
         }); 
         socket.on("disconnect",function(){ 
            var data ={
                sendor : "SERVER", 
                message :socket.username +"left chat room"
            }
            socket.broadcast.emit("updatemessage",data); 
         })
    })
}