const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const viewsPath = path.join(__dirname, '/views');

const publicDirectory = path.join(__dirname, './public');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "project1_db"
});

db.connect( (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected");
    }
});
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.urlencoded());
app.use(express.json());

  app.get("/", (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        res.render("index", {
            users: results
        });
    });
})

app.get("/edit", (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        res.render("editpage", {
            users: results
        });
    });
})

app.get("/edituser", (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        res.render("edituser", {
            users: results
        });
    });
})

app.get("/editemail", (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        res.render("editemail", {
            users: results
        });
    });
})

app.get("/editpassword", (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        res.render("editpassword", {
            users: results
        });
    });
})

app.get("/delete", (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        res.render("deletepage", {
            users: results
        });
    });
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", (req, res) => {
    let username = req.body.user_name;
    let email = req.body.email;
    let password = req.body.pass_word;
    let confirmPassword = req.body.confirm_password

    db.query('SELECT email FROM users WHERE email = ?', 
    [email], (error, results) => {
        if (results.length > 0) {
            res.render("register", {
                message: "Sorry, that email has been taken."
            })
        } else if( password !== confirmPassword ) {
            res.render('register', {
                message: 'Passwords do not match'
            });
        } else {
            db.query('INSERT INTO users SET ?', {user_name: username, email: email, pass_word: password},  (error, results) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(results);
                    return res.render('register', {
                        message: 'User has been registered'
                    });
                }
            })
        }});
    });

app.get("/edituser", (req, res) => {
    res.render("edituser");
})

app.post("/edituser", (req,res) => {

    let name = req.body.user_name;
    let id = req.body.id;

    let sql = 'UPDATE users SET user_name =? WHERE id = ?';
    let user = [name, id];

    db.query( sql, user, (error, results) => {
        if(error) {
            console.log(error);
            res.render("edituser", {
                message: "there was an error updating your user"
            })
        } else { 
            res.render("edituser", {
                message: "user updated"
            })
        }
    })
});

app.get("/editemail", (req, res) => {
    res.render("editemail");
})

app.post("/editemail", (req,res) => {

    let email = req.body.email;
    let id = req.body.id;

    let sql = 'UPDATE users SET email =? WHERE id = ?';
    let user = [email, id];

    db.query( sql, user, (error, results) => {
        if(error) {
            console.log(error);
            res.render("editemail", {
                message: "there was an error updating your email"
            })
        } else { 
            res.render("editemail", {
                message: "email updated"
            })
        }
    })
});

app.get("/editpassword", (req, res) => {
    res.render("editpassword");
})

app.post("/editpassword", (req,res) => {

    let password = req.body.pass_word;
    let confirmPassword = req.body.confirm_password;
    let newPassword = req.body.new_password;
    let id = req.body.id;

    let sql = 'UPDATE users SET pass_word =? WHERE id = ? AND pass_word =?';
    let user = [newPassword, id, confirmPassword];

    db.query('SELECT pass_word FROM users WHERE pass_word = ?', 
    [password], (error, results) => {
        if( password !== confirmPassword ) {
            res.render('editpassword', {
                message: 'Passwords do not match'
            });
        } else {
            db.query(sql, user, (error, results) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(results);
                    return res.render('editpassword', {
                        message: 'Password has been updated'
                        });
                }
            })
    }});
});

app.get("/delete", (req, res) => {
    res.render("deletepage");
});


app.post("/delete", (req,res) => {

    let id = req.body.id;

    let sql = 'DELETE FROM users WHERE id = ?';
    let user = [id];

    db.query( sql, user, (error, results) => {
        if(error) {
            console.log(error);
            res.render("deletepage", {
                message: "there was an error deleting your user"
            })
        } else { 
            res.render("deletepage", {
                message: "User Deleted"
            })
        }
    })
});




app.listen(3006, () => {
    console.log('Server is running on Port 3006');
  });