require('dotenv').config();

CONFIG = {};
CONFIG.secret_key = process.env.secret_key;
CONFIG.PORT = process.env.PORT;

CONFIG.db_name = process.env.db_name;
CONFIG.db_user = process.env.db_user;
CONFIG.db_password = process.env.db_password;
CONFIG.db_host = process.env.db_host;
CONFIG.db_dialect = process.env.db_dialect;
CONFIG.db_port = process.env.db_port;
CONFIG.jwt_encryption = process.env.jwt_encryption;
CONFIG.jwt_expiration = process.env.jwt_expiration;

module.exports = CONFIG;
