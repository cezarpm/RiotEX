export const commit = process.env.GIT_COMMIT || 'local';

export const enviroment = process.env.NODE_ENV || 'local';

// eslint-disable-next-line global-require
export const databaseConfig = require('../../ormconfig.json');
