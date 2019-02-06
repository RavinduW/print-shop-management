const express = require('express');
const router = express.Router(); //using express routers

//login route
router.get('/login',(req,res)=>res.render('login'));

//register route
router.get('/register',(req,res)=>res.render('register'));

router.post('/register',(req,res)=>{
    const{name,email,password,confirm_password} = req.body;
    let errors = []; //let variable type is introduced since ES2015. this is limited to a scope.

    //check required fields
    if(!name || !email || !password || !confirm_password){
        errors.push({msg:'Please fill in all fields'});
    }

    //check the password length
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    } 

    //check the passwords match
    if(password !== confirm_password){
        errors.push({msg:'Passwords do not match'});
    } 

    //check if there is any error occured
    if(errors.length >0){
        res.render('register',{
            errors,name,email,password,confirm_password
        });
    }else{
        res.send('pass');
    }
});

module.exports = router;