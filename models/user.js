import knex from '../config/db.js'

class User {

    static async getAll(){
        
        const data = await knex('users').select();
        return data;
    }

    static async getById(id){
        const data = await knex('users').where({id});
        return data;
    }

    static async exists(column,value) {

        const data = await knex('users').where(column,value);
        return data.length>0?true:false;
    }

    static async insert(user) {

        const data = await knex('users').insert(user);
        return data;

    }

    static async where(where) {

        const data = await knex('users').where(where);
        return data;

    }
    
    static async update(id,user) {

        const data = await knex('users').where({id}).update(user);
        return data;

    }


}

export default User;