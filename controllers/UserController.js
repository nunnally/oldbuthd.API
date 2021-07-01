import User from "../models/user.js";
import bcrypt from "bcryptjs";
class UserController{

    static async getAll(req,res){
        
        const data = await User.getAll()
        res.status(200).send(data)
    }

    static async insert(req,res){

        let { name,password,email,cpf } = req.body;

        if(await User.exists('cpf',cpf)){
            return res.send(409)
        }

        password= bcrypt.hashSync(password, 8);

        try{
            await User.insert({name,password,email,cpf})
            res.send(200)
        }
        catch(e){
            console.log(e)
        }
    }

    static async specificUser(req,res){
        
        const data = await User.getById(req.params.id)
        res.status(200).send(data)
        
    }

    static async update(req,res){
        let customer = req.body;
        const data = await User.update(req.params.id,customer)
        res.sendStatus(200);
        
    }

}

export default UserController;