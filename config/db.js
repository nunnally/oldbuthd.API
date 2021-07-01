import knex from 'knex'

export default knex({
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'cesar',
        port : 5432,
        password : '1702',
        database : 'oldbuthd'
    }
});;