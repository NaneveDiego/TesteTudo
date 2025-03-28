import jwt from 'jsonwebtoken';
import "dotenv/config";
import authRepository from '../repositories/authRepository.js';

export async function authMiddleware(req,res,next){
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).send("Token não informado");
    }

    const parts = authorization?.split(" ");
    if(parts.length !== 2){
        return res.status(401).send("Token mal formatado");
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)) return res.status(401).send("Token mal formatado");

    jwt.verify(token, process.env.SECRET, async (err, decode) => {
        if(err) return res.status(401).send("Token inválido");
        if(!decode) return res.status(401).send("Token inválido");

        const user = await authRepository.findById(decode.id);
        if(!user) return res.status(401).send("Token inválido");

        res.locals.user = user;
        
        next();
    })

}

