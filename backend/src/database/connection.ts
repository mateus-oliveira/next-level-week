import knex from 'knex';
import configuration from '../../knexfile';

const config = configuration;

const connection = knex(config);

export default connection;