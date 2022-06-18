const sqlite=require("sqlite3").verbose();
const db=new sqlite.Database("./backend/tours.sqlite",sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.log(err.message);
    console.log("connection done !");
});

const sql="create table users(id varchar NOT NULL,ammount int NOT NULL,PRIMARY KEY(id))";
const sql2="ALTER TABLE users add phone_no int";
const sql3=`insert into users(id,ammount,paid,name,tour,booking_date,tour_date,phone_no) values('ADVE40278',10000,2000,'Ram Roy','Ladakh','10-04-2022','04-11-2022',9876543210)`;
const sql5=`insert into tours(id,ammount,paid,name,tour,booking_date,tour_date,phone_no) values('ADVE40278',10000,2000,'Ram Roy','Ladakh','10-04-2022','04-11-2022',9876543210)`;
const sql4=`select ammount from users`
db.all(sql3,(err,result)=>{
    if(err) return console.log(err.message);
    else 
        console.log("inserted");
})

