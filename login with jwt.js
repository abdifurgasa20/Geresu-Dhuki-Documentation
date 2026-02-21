const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login",(req,res)=>{
    const {email,password} = req.body;

    db.query("SELECT * FROM members WHERE email=?",[email], async (err,result)=>{
        if(err || result.length === 0){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const user = result[0];
        const valid = await bcrypt.compare(password,user.password);

        if(!valid){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {id:user.id, role:user.role},
            "SECRET_KEY",
            {expiresIn:"1h"}
        );

        res.json({token, role:user.role});
    });
});

module.exports = router;