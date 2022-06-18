const express = require("express");
const app = express();
const sqlite=require("sqlite3").verbose();
const cors=require("cors");

app.use(cors());
app.use(express.json());

const db=new sqlite.Database("./backend/tours.sqlite",sqlite.OPEN_READWRITE,(err)=>{
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

app.get("/addBook",(req,res)=>{
    const name=req.body.name;
    const booking_date=req.body.booking_date;
    const phone_no=req.body.phone_no;
    const paid=req.body.paid;
    const ammount=req.body.ammount;
    const tour_date=req.body.tour_date;
    const tour=req.body.tour;
    const id=`ADVE${Math.ceil(phone_no/Math.pow(10,10))}`;
    // console.log(id);
    
    res.send(id);
});
// const sql=`create table tours(place varchar,dates varchar,days number,fare number)`;

app.get("/tour",(req,res)=>{
    db.all(`select * from tours`,(err,result)=>{
        if(err) return console.log(err.message);
        res.send(result);
    })
});

app.post("/balance",(req,res)=>{
    const id=req.body.id;
    const sql4=`select * from users where id=?`
    db.all(sql4,[id],(err,result)=>{
        if(err) return console.log(err.message);
        else 
            res.send(result);
    })
    
})



const PORT = 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
