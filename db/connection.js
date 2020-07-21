const Sequelize = require('Sequelize'); //connection with SQL db's and other stuff
const sequelize = new Sequelize({
    dialect:'sqlite', //dialect: type of the database
    storage: './db/app.db' //mysql archive path
});

module.exports = sequelize //needs to export this sequelize because whe are working with an external(no jobfinder.js) archive