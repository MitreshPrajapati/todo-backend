require('dotenv').config();


const authentication = (req, res, next)=>{
    const {token} = req.headers?.authentication?.split(" ")[1];
   
    if(token){
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        const {user_id} = decoded;
        req.body.user_id = user_id;

        next();
    }else{
        res.send({"msg": "Please Login"});
    }
    
}

module.exports = {authentication};