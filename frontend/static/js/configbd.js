/* const oracledb = require('oracledb');
// hr schema password
var password = 'proyecto' 
// checkConnection asycn function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "proyecto",
        password: password,
        connectString: "localhost/xepdb1"
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection(); */

const oracledb = require('oracledb');

cns = {
    user: "Admin",
    password: "admin",
    connectString: "localhost:1522/xe"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;