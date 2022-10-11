var jwt = require('jsonwebtoken')
const JWT_SECRET = 'Shivam123Secured'

const fetchUser = (req, res, next) => {

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Authenticate using valid token"})
    }

    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user;
        next();
        
    } catch (error) {
        console.error(error)
    }
}



module.exports = fetchUser