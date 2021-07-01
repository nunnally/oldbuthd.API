import { Request, Response, NextFunction } from "express";

export const checkRole = (roles) => {
  return async (req,res,next) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;

    //Get user role from  database


    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1) next();
    else res.status(401).send();
  };
};