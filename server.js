const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv'); //information hiding by dotenv library
dotenv.config();
const app = express();
app.use(express.static('public'))
app.use(express.json());

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

async function callQueryOnDatabase() {
    con.query('USE armansdatabase');
    const result = await callQuery('select * from student');
    return result;
}

function callQuery(query) {
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            resolve(results);
        }, (errorResponse) => {
            reject(errorResponse);
        });
    });
}


app.post('/api', async (request, response) => {
    console.log('I got a request');
    const res = await callQueryOnDatabase();
    console.log('query calls has ended');
    response.json({
        status: res
    });
});

app.listen(3001);