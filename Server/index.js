const {default:mongoose}=require("mongoose")
let Express=require("express")
let app=Express()
let jsonwebtoken=require("jsonwebtoken")
mongoose.connect("mongodb+srv://nouman:411801@cluster0.ranznsc.mongodb.net/BootShoestore").then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
}) 

app.use(Express.json())
let  {Users}=require("./module/user")
const { json } = require("react-router-dom")
  
app.post("/signup", async function(req,resp){
    let usersave=new Users(req.body)
    await usersave.save()
    resp.json(true)
})

app.post("/login",async function(req,resp){
     Check=await Users.findOne(req.body)
     if(Check){
        jsonwebtoken.sign({email:Check.email},"passwordtoken",{
            expiresIn:"1w"},
            function(err,token){
                resp.json({
                    newtoken:token,
                    Check
                })
            }
        )
     }
      
     console.log(Check,"login milagaa");
    //  resp.json(true)
} )


 

app.post("/check-token",function(req,resp){
    jsonwebtoken.verify(req.body.token,"passwordtoken", async function(err,mydatatoken){
        let mila=await Users.findOne({email:mydatatoken.email})
        resp.json(mila)
    })
})
// app.post("/check-token",async function(req,resp){
//     try{
//         const tokenwaladatamilgya=jsonwebtoken.verify(req.body.token,"passwordtoken");
//         let mila=await Users.findOne({email:tokenwaladatamilgya.email });
//         // console.log(loggedUser)
//         if(mila){
//             resp.status(200).json({
//                 message:true,
//                 mila,
//             })

//         }
//         }catch(error){
//         resp.status(4).json({ error: 'Invalid token'})
//     }
// })




app.listen("6070",()=>{
    console.log("server  chala")
})