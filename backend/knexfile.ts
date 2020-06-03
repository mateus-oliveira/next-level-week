module.exports = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Hubbi@2020',
        database: 'next_level_week',
        charset: 'utf8'
    },
    migrations: {
        directory: './src/database/migrations'
    },
    seeds: {
        directory: './src/database/seeds'
    },
};