const express=required ("express");
const bodyparser=required("body-parser");
const p= require("pg");
const schema=require("./schema");
const {Client}=require("pg");

const client=new Client();
await client.connect();

app.get("/getusers",(req,res)=>{
    const user=await client.query("select * from users");
    if(!user){
        console.log("data not found");
    }
})

app.update("/updateuser/:id",(req,res)=>{
    const data=req.body;
    const id=req.params;
    const user=await client.query(`update users set ifsc=${data.ifsc}  bank_id=${data.bank_id}  branch=${data.branch}  address=${data.address}  city=${data.city}  district=${data.district}  state=${data.state}  bank_name=${data.bank_name}  where id=${id}`);

    if(!user){
        console.log("data not found")
    }
})


app.delete("/deleteuser/:id",(req,res)=>{
    const data=req.body;
    const id=req.params;
    const user=await client.query(`delete from users where id=${id}`);

    if(!user){
        console.log("data not found")
    }
})


app.post("/postuser/:id",(req,res)=>{
    const data=req.body;
    const id=req.params;
    const user=await client.query(`insert into users (ifsc,bank_id,branch,address,city,district,state,bank_name) values (${data.ifsc} ,${data.bank_id},${data.branch},${data.address},${data.city},${data.district},${data.state},${data.bank_name})`);

    if(!user){
        console.log("data not found")
    }
})

const app=express();
app.listen(3000,()=>{
    console.log("server running");
})