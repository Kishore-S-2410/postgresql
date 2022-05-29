const p=require("pg").p;
const p= new p({
    user:postgresRole,
    host:"localhost",
    database:"database",
    password:"1234",
    port:"5432"
})

module.exports=p;