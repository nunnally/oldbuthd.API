import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config.js";

export const checkJwt = (req,res,next) => {
    //Get the jwt token from the head
    const token = req.headers["authorization"];

    if(!token)
        return res.status(401).send({
            message: "No token provided!"
    });

    token = token.substring(7);

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if(err)
        return res.status(401).json({
            auth: false,
            message: "Failed to authenticate token.",
            error: err
        });
      
    res.locals.jwtPayload = decoded;
    next();
  
    });
};