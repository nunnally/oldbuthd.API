import jwt from "jsonwebtoken";
import User from "../models/user.js";
import config from "../config/config.js";
import bcrypt from "bcryptjs";



class AuthController {

  static login = async (req,res) => {

    let { email, password } = req.body;

    if (!(email && password)) {
      return res.sendStatus(400);
    }

    let user = await User.where({email});

    //Yeah, i could use limit, but idon't care anymore
    user = user[0]

    if(!user){
      return res.sendStatus(401);
      console.log('here')
    }

    console.log(password)

    if (!bcrypt.compareSync(password,user.password)){
      return res.status(401).send();
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, name: user.name },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    res.send({user:{name:user.name,email:user.email},token});
    return;

  }
}
export default AuthController; 