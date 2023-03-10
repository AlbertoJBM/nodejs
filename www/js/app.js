function conextar(){

var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'castroolimpo',
    user: 'root',
    password:''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else {
        console.log('conexion exitosa');

    }
});

conexion.query('SELET * from cadastros', function(error, results, fields){
    if(error)
    throw error;

    results.array.forEach(result => {
        console.log(result);
        
    });
})
conexion.end();
}