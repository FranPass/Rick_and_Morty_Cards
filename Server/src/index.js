const server = require('./server');
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({force: true});
      
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});