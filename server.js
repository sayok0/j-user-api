/*
Copyright ©Umeka - All Rights Reserved
*/




//import;
const express = require('express')
const cors = require('cors')
//import express from 'express'
//import bodyParser from 'body-parser'

//USE;
app.use(cors())

//const;
const app = express()
const PORT = 8000


//Japanese user API test object;
const userAccount = {
    'asakai' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Asahi',
        'lName' : 'Kimura',
        'kanji' : '嘉村 旭',
        'age' : 23,
        'subs' : false,
        'newsletter' : false,
        'password' : 'ru40Test',
        'email' : 'asahi.kimura@gmail.com'
    },
    'ngc1569' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Abu',
        'lName' : 'Kakozaki',
        'kanji' : '箱崎 愛舞',
        'age' : 31,
        'subs' : true,
        'newsletter' : true,
        'password' : 'poK05000',
        'email' : 'abu.kakozaki@gmail.com'
    },
    'neotye' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Noyu',
        'lName' : 'Tobari',
        'kanji' : '戸張 乃柚',
        'age' : 16,
        'subs' : false,
        'newsletter' : true,
        'password' : 'moNa10',
        'email' : 'sphixxy0@yahoo.com'
    },
    'foxwine' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Rakui',
        'lName' : 'Fujinuma',
        'kanji' : '藤沼 楽意',
        'age' : 9,
        'subs' : false,
        'newsletter' : false,
        'password' : 'neko#1234',
        'email' : 'nedyuuroko@yahoo.com'
    },
    'cleffly' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Ikkoku',
        'lName' : 'Kaku',
        'kanji' : '角 一石',
        'age' : 36,
        'subs' : false,
        'newsletter' : true,
        'password' : 'test!not0',
        'email' : 'ikkoku.kaku@gmail.com'
    },
    'sunfrog' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Ryuuju',
        'lName' : 'Imaseki',
        'kanji' : '今関 琉樹',
        'age' : 26,
        'subs' : true,
        'newsletter' : false,
        'password' : 'Gege14',
        'email' : 'roundIT.sub@gmail.com'
    },
    'goggles' : {
        'userName' : 'Asaki',
        'country' : 'JP',
        'language' : 'Japanese',
        'fName' : 'Ryuuki',
        'lName' : 'Tsuyuki',
        'kanji' : '露木 りゅうき',
        'age' : 28,
        'subs' : false,
        'newsletter' : true,
        'password' : 'pass12345',
        'email' : 'ryuuki.sub@gmail.com'
    },
    'unknow' : {
        'userName' : 'unknow',
        'country' : 'unknow',
        'language' : 'unknow',
        'fName' : 'unknow',
        'lName' : 'unknow',
        'kanji' : 'unknow',
        'age' : null,
        'subs' : null,
        'newsletter' : null,
        'password' : 'unknow',
        'email' : 'unknow'
    }
}



//GET;
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const userName = req.params.name.toLowerCase()
    if(userAccount[userName]){
        res.json(userAccount[userName])
    }
    if(userName === 'list'){
        res.json(userAccount)
    }else{
        res.json(userAccount['unknow'])
        console.warn(`Can't find: ${userName} on our database!`);
    }
    //console.log(req.params.name);
    res.json(userAccount)
})






//Listen;
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port: ${PORT}! Betta Go Catch It!`);
})

/*
Comments;


** Just some extra info about server/route; **

GET = send request to server that will respond to that patch.
    '/' = root folder where server are on. Here we are sending user our index.html file.
    If you plan to only build pure API, then you can skip index.html and add something else, you choice!.
    
    Next GET is '/api'. This will response our userAccount database to user. (PST! DON'T DO THIS ON YOUR REAL PROJECT!) 
    Would be bad if you tell some unknow user all other useraccounts :P But here it is fine, we are just testing how it works.
    '/api/:name' = query for name params. However! you can't add another params like '/api/test/' becuase then test would be in name params.
    Leon did NOT talk about that, nor multiple query... Maybe later, or I will try to find another guide about it.  


use = Use some methods/module that are outside server.js file?



listen = Listen for connections. First param is what port you are using, next one is cf (callback function).
         There is many way to write it, but most common is --->  process.env.PORT || PORT  <---- This will now work for any server+localhost.
         cf ---> Anything you want, but here we are just telling dev logs that this server is now online on that port.
*/