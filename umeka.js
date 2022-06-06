/*
Copyright @umeka
*****************************************************************************************************************

PLEASE, READ @README.saya FIRST!
*/














































/*
Comments;

Will try to keep ALL comments here insteed of each script file. (Just limit comments).
I might change this later, but I prefer to sort my comments so that It will be easyer to find and read if needed.
So all comments now below will be in "sub-comments", each will be unsorted! But sorted inside.
--  --  --  

Extra note before: https://www.twitch.tv/mayanwolfe/videos   <---- Also another web-dev, check video for about same guide.
Leon current clip: https://www.twitch.tv/videos/1495484687


***********************************************************************************************************************
::::::::::::::::::::::::::::::      S T E P  O R D E R ;      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
***********************************************************************************************************************

1;
Create new folder. mkdir [folderName], or just add it whatever you want.
Leon: tea-api
Umeka: j-user-api
-- -- --

2) npm init
3) npm install express --save
4) echo > .gitignore (add line: node_modules)  <--- UTF-8
5) echo > server.js (PST! See server comments for more info)
6) echo > index.html
7) npm install cors --save  (then add this line on your server.js --> const cors = require('cors')  + app.use(cors())  )
8) Upload to github. (You can skip this part if you want)

8a) git init
8b) git add .
8c) git commit -m 'comments here'
8d) git branch -M main
8e) git remote add origin https://github.com/sayok0/j-user-api.git  <---- your git url here. Don't use my code!
8f) git push -u origin main

***********************************************************************************************************************
::::::::::::::::::::::::::::::      S E R V E R .JS ;      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
***********************************************************************************************************************

From Leon's script;
const express = require('express')  <--- Leon's code. But you can also write --> import express from 'express'
const app = express()  ---> just short link to express methods.
UPDATE! ---> You can't just write import, you will get some error. Need to do something in package.json first. I will use Leon's code.

Now let's add our first GET API;
app.get(patch, cf)  ---> patch = whatever url patch should trigger. cf = callback-Function, you can link or write direcly.
                         Here we want to add patch on root folder, and send index.html. See more @server.js


You also want to add listener, else nothing happens (or error);
app.listen(port, cf) --> what port your server will be running at. Default is to add: process.env.PORT || PORT.
                         On our cf, we are telling user that server are online on that port. See more @server.js


To test our new server, we can then create some fake JSON inside server.js.
In real life you want to store real data into some database, but for now I will just follow each step what Leon is showing.
So create some random object and name it whatever you want, don't write to much as what I did here lol...
Atleast create 3 example, and each example should have like 2-5 property. See @server.js for more info, and see how it looks like.
Example: const testData = {'new1':{'d1:7,a:'hi'},'new2':{'d1:2,a:'hello''},'new3':{'d1:9,a:'god'}} <--- Make sure to write in string.

After you have done that, you want to respond that as JSON when user are entering some url patch.
For that we need to add another app.get(). '/api' <---- This will be our next patch, so write it down!
And for cf: For now, just respond it to user (lucky this is only test project. DON'T DO THIS ON YOUR REAL PROJECT!).

Now, let's update our api route so it will looks like this;
app.get('/api/:name',(req,res){...code})  <---- Leon did write fullname of arguments: request,response. But you can write whatever you want.
:name = query params. Don't know yet how to add multiple query, Leon don't answer me or any of 20 other ppl that did ask for it lol.
Anyway...
Here Leon did log query params by writing this code --> request.params.name (for me, it will start with req).

Next step is to add some conditional to check if userName exist on our database, else send some unknow json back.
Leon's script is to check if certain tea exist on his object, else send back unknow json back.
I did also add some list that I did add on that conditional. <--- prefer to have another query for that, but don't know yet how to do it.


Step 5;
Now before pub this on heroku, you want to install cors module, this will make so that you can run both offline/online/localhost at the same time!
const cors = require('cors')
app.use(cors())
app.use() = is needed if you want to use some module that are outside your server. (I think, not sure)...










Extra script added by @Umeka;
import bodyParser from 'body-parser' + import express from 'express'


***********************************************************************************************************************
::::::::::::::::::::::::::::::       ;      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
***********************************************************************************************************************











***********************************************************************************************************************
::::::::::::::::::::::::::::::       ;      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
***********************************************************************************************************************



*/