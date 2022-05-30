const sqlite=require("sqlite3").verbose();

const db=new sqlite.Database("./tours.sqlite",sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.log(err.message);
    console.log("connection done !");
});

// const create_table=`CREATE TABLE tours
//                     (place varchar, date varchar, days number, fare )`;

// db.run(create_table);

function insert(place,date,days,fare){
    const sql=`insert into tours(place,date,days,fare)
                values('${place}','${date}',${days},${fare})`;
    
    db.run(sql,(err)=>{
        if(err) return console.log(err.message);
        console.log("Insertion Successfull !!");
    });
}

insert('haridwar','10-10-2022,20-10-2022',10,10000);