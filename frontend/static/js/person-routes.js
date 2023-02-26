/* const {Router} = require('express');
const router = Router();
const BD = require('./configbd');

//READ
router.get('/getUsers', async(req,res)=>{
    sql = "select * from Carrera";
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user=>{
        let userSchema = {
            "Id_Carrera": user[0],
            "Nombre": user[1],
            "Plan_Estudios": user[2]
        }
        Users.push(userSchema);
    })
    res.json(Users);
}); */

const { Router } = require('express');
const router = Router();
const BD = require('./configbd');

//---------------------------------------------------------------OPERACIONES CON CARRERA

router.get('/getCarreras', async (req, res) => {
    sql = "select * from Carrera";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Carrera": user[0],
            "Carrera": user[1],
            "Plan_Estudios": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})
//---------------------------------------------------------OPERACIONES CON ALUMNOS
//-------------GET LOGIN
router.get('/getLogin/:id/:password', async (req, res) => {
    const { id, password } = req.params;
    sql = "select * from Alumnos where NControl=:id AND CONTRASENA=:password";
    let result = await BD.Open(sql, [id, password], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "NControl": user[0],
            "ID_Carrera": user[1],
            "Nombre": user[2],
            "AP_PATERNO": user[3],
            "AP_MATERNO": user[4],
            "SEMESTRE": user[5],
            "PERIODO": user[6],
            "CREDITOS_DISPONIBLES": user[7],
            "ESPECIALIDAD": user[8],
            "CONTRASENA": user[9]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//Traer los datos de un sólo alumno
router.get('/getAlumno/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from Alumnos where NControl=:id";
    let result = await BD.Open(sql, [id], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "NControl": user[0],
            "ID_Carrera": user[1],
            "Nombre": user[2],
            "AP_PATERNO": user[3],
            "AP_MATERNO": user[4],
            "SEMESTRE": user[5],
            "PERIODO": user[6],
            "CREDITOS_DISPONIBLES": user[7],
            "ESPECIALIDAD": user[8],
            "CONTRASENA": user[9]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})

//-------------------------------------------------------------OPERACIONES CON MATERIAS
//1.-----Mostrar materias de x semestre

router.get('/getMaterias/:semestre', async (req, res) => {
    const { semestre } = req.params;
    sql = "select ID_MATERIA, MATERIA, CUPO, CREDITOS, SEMESTRE from MATERIA where SEMESTRE=:semestre";
    let result = await BD.Open(sql, [semestre], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_MATERIA": user[0],
            "MATERIA": user[1],
            "CUPO": user[2],
            "CREDITOS": user[3],
            "SEMESTRE":user[4],
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//BUSCAR MATERIAS POR NOM RE
/*pETICION PARA LA SELECCIÓN DE MATERIAS, DEBE TENER EL MISMO NOMBRE */
router.get('/getMats/:MAT', async (req, res) => {
    const { MAT } = req.params;
    sql = `SELECT MATERIA.ID_MATERIA, MATERIA.MATERIA, DOCENTE.NOMBRE,DOCENTE.AP_PATERNO, DOCENTE.AP_MATERNO, AULA.NOMBRE, HORARIO.HORA_INICIO_LUNES
    FROM MATERIA
    INNER JOIN MATERIA_ASIGNADA_PROFESOR ON MATERIA.ID_MATERIA = MATERIA_ASIGNADA_PROFESOR.ID_MATERIA
    INNER JOIN DOCENTE ON MATERIA_ASIGNADA_PROFESOR.ID_DOCENTE = DOCENTE.ID_DOCENTE
    INNER JOIN AULA ON MATERIA.ID_AULA = AULA.ID_AULA
    INNER JOIN HORARIO ON MATERIA.ID_HORARIO = HORARIO.ID_HORARIO WHERE MATERIA =:MAT
`;
    let result = await BD.Open(sql, [MAT], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_MATERIA":user[0],
            "MATERIA": user[1],
            "NOMBRE": user[2],
            "AP_PATERNO": user[3],
            "AP_MATERNO": user[4],
            "HORA_INICIO_LUNES": user[5],
            "HORA_FINAL_LUNES": user[6],
            "AULA": user[7]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//--------------------------------------------------------------OPERACIONES CON DOCXMAT

//---------------------------------------------------------------OPERACIONES CON CARGA

//1.-Traer todas las materias de un alumno
router.get('/getCarga/:NCONTROL', async (req, res) => {
    const { NCONTROL } = req.params;
    sql = `SELECT MATERIA.MATERIA, DOCENTE.NOMBRE, DOCENTE.AP_PATERNO, DOCENTE.AP_MATERNO, HORARIO.HORA_INICIO_LUNES, AULA.NOMBRE 
    FROM ALUMNOS INNER JOIN CARGA ON ALUMNOS.NCONTROL=CARGA.NCONTROL 
    INNER JOIN MATERIA_ASIGNADA_PROFESOR ON CARGA.ID_DOCXMATH=MATERIA_ASIGNADA_PROFESOR.ID_DOCXMATH 
    INNER JOIN MATERIA ON MATERIA_ASIGNADA_PROFESOR.ID_MATERIA=MATERIA.ID_MATERIA 
    INNER JOIN DOCENTE ON MATERIA_ASIGNADA_PROFESOR.ID_DOCENTE=DOCENTE.ID_DOCENTE 
    INNER JOIN HORARIO ON MATERIA.ID_HORARIO=HORARIO.ID_HORARIO 
    INNER JOIN AULA ON MATERIA.ID_AULA=AULA.ID_AULA WHERE ALUMNOS.NCONTROL=:NCONTROL`;
    let result = await BD.Open(sql, [NCONTROL], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "MATERIA": user[0],
            "NOMBRE": user[1],
            "AP_PATERNO": user[2],
            "AP_MATERNO": user[3],
            "HORA_INICIO_LUNES": user[4],
            "AULA": user[5]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})

//----------------------PETICION PARA INICIAR SESION EMPLEADOS
router.get('/getEmpleado/:usuario/:contrasena', async (req, res) => {
    const { usuario, contrasena } = req.params;
    
    sql = "select * from Empleados where usuario=:id AND contrasena=:contrasena";
    let result = await BD.Open(sql, [usuario,contrasena], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "USUARIO": user[0],
            "CONTRASENA": user[1],
        }
        Users.push(userSchema);
    })
    res.json(Users);
})

//Checar si tiene materias o no




//Peticion para obtener una sola materia.
router.get('/getMateria/:id', async (req, res) => {
    const { id } = req.params;
    sql = `SELECT MATERIA.ID_MATERIA, MATERIA.MATERIA, DOCENTE.NOMBRE,DOCENTE.AP_PATERNO, DOCENTE.AP_MATERNO, AULA.NOMBRE, HORARIO.HORA_INICIO_LUNES
    FROM MATERIA
    INNER JOIN MATERIA_ASIGNADA_PROFESOR ON MATERIA.ID_MATERIA = MATERIA_ASIGNADA_PROFESOR.ID_MATERIA
    INNER JOIN DOCENTE ON MATERIA_ASIGNADA_PROFESOR.ID_DOCENTE = DOCENTE.ID_DOCENTE
    INNER JOIN AULA ON MATERIA.ID_AULA = AULA.ID_AULA
    INNER JOIN HORARIO ON MATERIA.ID_HORARIO = HORARIO.ID_HORARIO WHERE MATERIA.ID_MATERIA=:id
`;
    let result = await BD.Open(sql, [id], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_MATERIA":user[0],
            "MATERIA": user[1],
            "NOMBRE": user[2],
            "AP_PATERNO": user[3],
            "AP_MATERNO": user[4],
            "HORA_INICIO_LUNES": user[5],
            "HORA_FINAL_LUNES": user[6],
            "AULA": user[7]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
/*pETICION PARA LA SELECCIÓN DE MATERIAS, DEBE TENER EL MISMO NOMBRE */
router.get('/getGrupos/:MATERIA', async (req, res) => {
    const { MATERIA } = req.params;
    sql = `SELECT MATERIA.ID_MATERIA, MATERIA.MATERIA, DOCENTE.NOMBRE,DOCENTE.AP_PATERNO, DOCENTE.AP_MATERNO, AULA.NOMBRE, HORARIO.HORA_INICIO_LUNES, ID_DOCXMATH
    FROM MATERIA
    INNER JOIN MATERIA_ASIGNADA_PROFESOR ON MATERIA.ID_MATERIA = MATERIA_ASIGNADA_PROFESOR.ID_MATERIA
    INNER JOIN DOCENTE ON MATERIA_ASIGNADA_PROFESOR.ID_DOCENTE = DOCENTE.ID_DOCENTE
    INNER JOIN AULA ON MATERIA.ID_AULA = AULA.ID_AULA
    INNER JOIN HORARIO ON MATERIA.ID_HORARIO = HORARIO.ID_HORARIO WHERE MATERIA=:MATERIA
`;
    let result = await BD.Open(sql, [MATERIA], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_MATERIA":user[0],
            "MATERIA": user[1],
            "NOMBRE": user[2],
            "AP_PATERNO": user[3],
            "AP_MATERNO": user[4],
            "HORA_INICIO_LUNES": user[5],
            "HORA_FINAL_LUNES": user[6],
            "AULA": user[7],
            "ID_DOCXMATH":user[8]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//2.-Agregar una materia a la carga
//Por una sola materia.
router.post('/addCarga', async (req, res) => {
    const { Id_Carga, Ncontrol, Id_DocxMath, Calificacion } = req.body;
    const datos = {Id_Carga,Ncontrol,Id_DocxMath,Calificacion};
    sql = "Insert into Carga(Id_Carga,Ncontrol,Id_DocxMath, Calificacion) VALUES (:Id_Carga, :Ncontrol, :Id_DocxMath, :Calificacion)";

    await BD.Open(sql, [Id_Carga, Ncontrol, Id_DocxMath, Calificacion], true);
    res.status(200).json({
        "Id_Carga": Id_Carga,
        "Ncontrol": Ncontrol,
        "Id_DocxMath": Id_DocxMath,
        "Calificacion":Calificacion
    })
})

//---------------------------------------------------------------OPERACIONES CON DOCENTE
//1.- Obtener datos del docente
router.get('/getDocente/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from Docente where Id_Docente=:id";
    let result = await BD.Open(sql, [id], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Docente": user[0],
            "Nombre": user[1],
            "AP_PATERNO": user[2],
            "AP_MATERNO": user[3]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})

//---------------------------------------------------------------OPERACIONES CON HORARIO
//1.- Obtener datos del horario
router.get('/getHorario/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from Horario where Id_Horario=:id";
    let result = await BD.Open(sql, [id], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Horario": user[0],
            "Hora_Inicio_Lunes": user[1],
            "Hora_Final_Lunes": user[2],
            "Hora_Inicio_Martes": user[3],
            "Hora_Final_Martes": user[4],
            "Hora_Inicio_Miercoles": user[5],
            "Hora_Final_Miercoles": user[6],
            "Hora_Inicio_Jueves": user[7],
            "Hora_Final_Jueves": user[8],
            "Hora_Inicio_Viernes": user[9],
            "Hora_Final_Viernes": user[10]

        }
        Users.push(userSchema);
    })
    res.json(Users);
})

//---------------------------------------------------------------OPERACIONES CON AULA
//1.- Obtener datos del Aula
router.get('/getAula/:id', async (req, res) => {
    const { id } = req.params;
    sql = "select * from Aula where Id_Aula=:id";
    let result = await BD.Open(sql, [id], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Aula": user[0],
            "Nombre": user[1],
            "Edificio": user[2],
            "Capacidad": user[3]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//CREATE

router.post('/addAlumno', async (req, res) => {
    const { NCONTROL, ID_CARRERA, NOMBRE, AP_PATERNO, AP_MATERNO, SEMESTRE, PERIODO, CREDITOS_DISPONIBLES,ESPECIALIDAD, CONTRASENA } = req.body;

    //Secuencia sql para poder agregar el alumno a la base de datos
    sql = "insert into alumnos(NCONTROL, ID_CARRERA, NOMBRE, AP_PATERNO, AP_MATERNO, SEMESTRE, PERIODO, CREDITOS_DISPONIBLES, ESPECIALIDAD,CONTRASENA) values (:NCONTROL, :ID_CARRERA, :NOMBRE, :AP_PATERNO, :AP_MATERNO, :SEMESTRE, :PERIODO, :CREDITOS, :ESPECIALIDAD, :CONTRASENA)"

    await BD.Open(sql, [NCONTROL, ID_CARRERA, NOMBRE, AP_PATERNO, AP_MATERNO, SEMESTRE, PERIODO, CREDITOS_DISPONIBLES,ESPECIALIDAD, CONTRASENA], true);
    res.status(200).json({
        "NCONTROL": NCONTROL,
        "ID_MATERIA": ID_CARRERA,
        "NOMBRE": NOMBRE,
        "AP_PATERNO":AP_PATERNO,
        "AP_MATERNO":AP_MATERNO,
        "SEMESTRE":SEMESTRE,
        "PERIODO":PERIODO,
        "CREDITOS_DISPONIBLES":CREDITOS_DISPONIBLES,
        "ESPECIALIDAD":ESPECIALIDAD,
        "CONTRASENA":CONTRASENA,
        
    })
    
})

//UPDATE
router.put("/updateUser", async (req, res) => {
    const { codu, username, firstname, lastname } = req.body;

    sql = "update person set username=:username, firstname=:firstname, lastname=:lastname where codu=:codu";

    await BD.Open(sql, [username, firstname, lastname,codu], true);

    res.status(200).json({
        "codu": codu,
        "username": username,
        "firstname": firstname,
        "lastname": lastname
    })

})

//----------------------------------------ELIMINACIONES---------------------------------

//DELETE ESSTA ES LA SENTENCIA PARA ELIMINAR ALUMNOS
router.delete("/deleteAlumno/:ncontrol", async (req, res) => {
    const { ncontrol } = req.params;
    //Primer tenemos que eliminar a los hijos de las tablas padres
    //Para eso primero tenmos que realiar una busqueda en busca de las tablas
    //hijas donde queremos eliminar la inforamción
    sql = "delete from carga where ncontrol=:ncontrol"
    //Ejecutamos la sentencia SQL para la eliminación
    await BD.Open(sql, [ncontrol], true);

    //HACEMOS LA SENTENCIA SQL
    sql = "delete from alumnos where ncontrol=:ncontrol";
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [ncontrol], true);
    //MENSAJE DE ERROR
    res.json({ "msg": "Usuario Eliminado" })
})


module.exports = router;