const sqlite=require("sqlite3").verbose();
const db=new sqlite.Database("./backend/tours.sqlite",sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.log(err.message);
    console.log("connection done !");
});
const sql="create table tours(place varchar NOT NULL,dates date NOT NULL,days number NOT NULL,fare number NOT NULL,PRIMARY KEY(dates))"
const sql2="ALTER TABLE tours ADD category varchar;"
const sql3="DROP TABLE tours";
const sql4="insert into tours(place,dates,days,fare) values('Ladakh','10-10-2022',10,20000)"
db.run(sql4,(err)=>{
    if(err) return console.log(err.message);
    else 
        console.log("created!");
})
