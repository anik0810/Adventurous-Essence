const express = require("express");
const app = express();
const sqlite=require("sqlite3").verbose();
const cors=require("cors");

app.use(cors());
app.use(express.json());

const db=new sqlite.Database("./tours.sqlite",sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.log(err.message);
    console.log("connection done !");
});

app.post("/add",(req,res)=>{
    const place=req.body.place;
    const dates=req.body.dates;
    const days=req.body.days;
    const fare=req.body.fare;

    const sql=`insert into tours(place,dates,days,fare) values(?,?,?,?)`
    db.run(sql,[place,dates,days,fare],(err)=>{
        if(err) return console.log(err.message);
        console.log("insertion successfull !!");
    });
});
// const sql=`create table tours(place varchar,dates varchar,days number,fare number)`;



const PORT = 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
