import knex from '../config/db.js'

class Categories {

    static async getAll(){
        
        const data = await knex('categories').select();
        return data;
    }

    static async exists(value,column="name") {

        const data = await (await knex('categories').where(column,value)).toString();
        return data.length>0?true:false;
    }

    static async insert(name) {

        const data = await knex('categories').insert({name});
        return data;
    }

    static async getOne(id){
        const data = await knex('categories').where('id',id);
        return data;
    }

}

export default Categories;