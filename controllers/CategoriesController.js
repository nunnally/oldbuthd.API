import Categories from "../models/categories.js";

class CategoriesController{

    static async getAll(req,res){
        
        const data = await Categories.getAll()
        res.status(200).send(data)
        
    }

    static async insert(req,res){

        let { name } = req.body;

        if(await Categories.exists(name)) {
            res.sendStatus(409)
        }else{
            await Categories.insert(name)
            res.sendStatus(200)
        }
        
    }

    static async specificCategory(req,res){
        
        const data = await Categories.getOne(req.params.id)
        res.status(200).send(data)
        
    }
}

export default CategoriesController;