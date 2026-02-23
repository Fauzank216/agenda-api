import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../utils/errors/unauthorizedError.js'
export function authJwt(req, res, next) {

    let authHeader = req.headers.authorization
    console.log(authHeader)
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError('Unauthorized')
    }

    let token = authHeader.split(' ')[1]
    console.log(token)

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(err){
        next(err)
    }
}