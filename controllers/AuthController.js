/* import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import config from "../config/config";


class AuthController {
  static login = async (req,res) => {

    let { username, password } = req.body;

    if (!(username && password)) {
      return res.status(400).send();

    }

  }
}
export default AuthController; */