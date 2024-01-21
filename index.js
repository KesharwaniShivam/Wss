import express from "express";
import {WebSocketServer} from "ws" ;

const app = express()
const port  = 3000

app.get('/' , (req , res) => {
    res.send("Hello there")
})

app.get('/name' , (req , res) =>{
    res.send("I'm shivam  ")
})

// app.get('/fullname' , (req , res) => {
//     res.send("Hello Im Shivam Kesharwani")
// })

// app.get('/status' , (req , res) =>{
//     res.send("Single")
// })

// app.get('/shivam/hasGf', (req , res) =>{
//     res.send("NO")
// })
const server = app.listen(port , () =>{
    console.log(`App listening to port : ${port}`)
} )

const wss = new WebSocketServer({server})   // yaha pe us port ko pass karenge jis port pe "websocket" ko listen karana hai , apne ko same 3000 pe karana hai to {server} pass kr denge

wss.on("connection" , (ws) =>{
    ws.on("message" , (data) =>{
        console.log(`data from the client : ${data}`)
        ws.send("thanks!");    // this is response 
    })
})


