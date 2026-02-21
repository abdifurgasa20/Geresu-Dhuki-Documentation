const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
    const token = req.headers["authorization"];
    if(!token) return res.sendStatus(401);

    jwt.verify(token, "SECRET_KEY", (err, user)=>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function authorizeRole(role){
    return (req,res,next)=>{
        if(req.user.role !== role){
            return res.status(403).json({message:"Access denied"});
        }
        next();
    };
}

module.exports = { authenticateToken, authorizeRole };