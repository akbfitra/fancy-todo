const jwt = require('jsonwebtoken')

module.exports = {
    tokenGenerate: (payload) => {
        return jwt.sign(payload, process.env.JWT_SECRET)
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}