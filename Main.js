var data = require('./Connection');
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use('/img', express.static("img"))
app.use('/assests', express.static("assests"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var mysql=require("mysql")

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
app.get('/signup', function (req, res) {
    res.sendFile(__dirname + '/contact.html')
});
app.get('/contactus', function (req, res) {
    res.sendFile(__dirname + '/contactus.html')
});



app.post('/signup', function (req, res) {
    var name = req.body.name
    var email = req.body.email
    var pass = req.body.pass
    var num = req.body.mno
    var cro = req.body.cro
    data.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            var sql = 'insert into signUp (name,email,pass, num,cro) values ?'
            var values = [[name, email, pass , num, cro]]
            data.query(sql, [values], (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.redirect('/')
                }
            })
        }
    })
})


app.post('/', function (req, res) {
    var email = req.body.email
    var pass = req.body.password

    data.query(
        'select * from signUp where email = ? and pass = ? ', [email, pass], function (error, results) {
            res.redirect("/")
            console.log("successfull login")
            // if (results.length > 0) {
            //     res.send("you enter wrong details")
            // }
            // else {
            // }
        }
    )
    })



    app.post('/contactus', function (req, res) {
        var name = req.body.name
        var email = req.body.email
        var pass = req.body.pass
        var num = req.body.mno
        var cro = req.body.cro
        var address = req.body.address
     
                var sql = 'insert into contactus (name,email,pass, num ,cro ,address) values ?'
                var values = [[name, email, pass , num, cro, address]]
                data.query(sql, [values], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.redirect('/')
                    }
                })
            }
    )

app.listen(8000)