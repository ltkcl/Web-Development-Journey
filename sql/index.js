const { faker } = require('@faker-js/faker');
let mysql = require("mysql2");

let  getRandomUser =()=>{
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database : 'delt_app',
    password : 'Kishore@11571'
});
let show ='select * from user';
let p ="INSERT INTO USER (ID,USERNAME,PASSWORD) VALUES (?)";
let q=["123b","123newuserb","abc@gmail.com","abcb"];
try{
    connection.query(show,(err,result)=>{
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}
catch(err){
    console.log(err);
}
connection.end();
