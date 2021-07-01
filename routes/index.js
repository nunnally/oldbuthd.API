import express from 'express';
const { Router, Request, Response } = express;
import user from "./user.js";
import categories from "./categories.js";
//import auth from "./auth.js"


const routes = Router();

//routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/categories", categories);



export default routes;