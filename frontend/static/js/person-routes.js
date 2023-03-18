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

//borrar una materia
//--------delete materia asignada profesor
router.delete("/deleteMateria/:ID_MATERIA", async (req, res) => {
    const { ID_MATERIA } = req.params;
   
    //También tenemos que eliminar las materias asignadas que tiene
    sql = 'delete from materia where ID_MATERIA = :ID_MATERIA';
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [ID_MATERIA], true);
    //También tenemos que eliminar las materias asignadas que tiene
   
    //MENSAJE DE ERROR
    res.json({ "msg": "MATERIA Eliminada" })
})


router.post('/addMateria_Asignada', async (req, res) => {
    const { ID_DOCXMATH, ID_DOCENTE, ID_MATERIA } = req.body;
    sql = "Insert into MATERIA_ASIGNADA_PROFESOR VALUES (:ID_DOCXMATH, :ID_DOCENTE, :ID_MATERIA)";

    await BD.Open(sql, [ID_DOCXMATH, ID_DOCENTE, ID_MATERIA], true);
    res.status(200).json({
        "ID_DOCXMATH": ID_DOCXMATH,
        "ID_DOCENTE": ID_DOCENTE,
        "ID_MATERIA": ID_MATERIA,
    })
})
//--------delete materia asignada profesor
router.delete("/deleteMateria_Asignada/:ID_DOCXMATH", async (req, res) => {
    const { ID_DOCXMATH } = req.params;
   
    //También tenemos que eliminar las materias asignadas que tiene
    sql = 'delete from materia_asignada_profesor where ID_DOCXMATH = :ID_DOCXMATH';
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [ID_DOCXMATH], true);
    //También tenemos que eliminar las materias asignadas que tiene
   
    //MENSAJE DE ERROR
    res.json({ "msg": "Horario Eliminada" })
})
//get  all materias seleccionadas
router.get('/getMaterias_asigandas', async (req, res) => {
    sql = "select * from materia_asignada_profesor";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_DOCXMATH": user[0],
            "ID_DOCENTE": user[1],
            "ID_MATERIA": user[2]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})
//delete un solo docente
router.delete("/deleteADocente/:ID_DOCENTE", async (req, res) => {
    const { ID_DOCENTE } = req.params;
   
    //También tenemos que eliminar las materias asignadas que tiene
    sql = 'delete from DOCENTE where ID_DOCENTE = :ID_DOCENTE';
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [ID_DOCENTE], true);
    //También tenemos que eliminar las materias asignadas que tiene
   
    //MENSAJE DE ERROR
    res.json({ "msg": "Horario Eliminada" })
})
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
//---consultar todas las materias
router.get('/getAllCarreras', async (req, res) => {
    sql = "SELECT * FROM carrera";
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_CARRERA": user[0],
            "NOMBRE": user[1],
            "PLAN_ESTUDIOS": user[2],

        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//-------ACTUALIZAR LA MATERIA
router.put('/updateMat/:ID_MATERIA', async (req, res) => {
    const {ID_HORARIO, ID_AULA, ID_CARRERA, MATERIA, CREDITOS, CUPO,SEMESTRE} = req.body;
    const {ID_MATERIA} = req.params;
    sql = "UPDATE MATERIA set ID_HORARIO = :ID_HORARIO, ID_AULA = :ID_AULA, ID_CARRERA = :ID_CARRERA, MATERIA = :MATERIA, CREDITOS = :CREDITOS, CUPO=:CUPO, SEMESTRE=:SEMESTRE WHERE ID_MATERIA=:ID_MATERIA ";

    await BD.Open(sql, [ID_HORARIO, ID_AULA, ID_CARRERA, MATERIA, CREDITOS, CUPO, SEMESTRE,ID_MATERIA], true);
    

    res.status(200).json()
})
//-------OBTENER UNA SOLA CARRERA
router.get('/getJusAtMateria/:ID_MATERIA', async (req, res) => {
    const {ID_MATERIA} = req.params;
    sql = "select * from materia, carrera where ID_MATERIA = :ID_MATERIA";

    let result = await BD.Open(sql, [ID_MATERIA], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_MATERIA": user[0],
            "ID_HORARIO": user[1],
            "ID_AULA": user[2],
            "ID_CARRERA": user[3],
            "MATERIA": user[4],
            "CREDITOS": user[5],
            "CUPO": user[6],
            "SEMESTRE": user[7],
            "NOMBRE": user[9]

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
//Traer los datos de un sólo alumno
router.get('/getAllAlumnos', async (req, res) => {
    sql = "select * from Alumnos ";
    let result = await BD.Open(sql, [], false);
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
//update alumno
//UPDATE
router.put("/updateAlumno/:NCONTROL", async (req, res) => {
    const {   NOMBRE, AP_PATERNO, AP_MATERNO, SEMESTRE, PERIODO, CREDITOS,ESPECIALIDAD } = req.body;
    const {NCONTROL} = req.params;
    sql = "update ALUMNOS set NOMBRE=:NOMBRE, AP_PATERNO=:AP_PATERNO, AP_MATERNO=:AP_MATERNO,SEMESTRE=:SEMESTRE, PERIODO=:PERIODO, CREDITOS_DISPONIBLES=:CREDITOS,ESPECIALIDAD=:ESPECIALIDAD  where NCONTROL=:NCONTROL";
    
    await BD.Open(sql, [  NOMBRE, AP_PATERNO,AP_MATERNO, SEMESTRE,PERIODO,CREDITOS,ESPECIALIDAD, NCONTROL], true);
    //Error con los números.
    //Deb ser error del postman
    res.status(200).json({
        "NOMBRE": NOMBRE,
        "AP_PATERNO": AP_PATERNO,
        "AP_MATERNO": AP_MATERNO
    })

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

//---consultar todas las materias
router.get('/getAllMaterias', async (req, res) => {
    sql = "SELECT * FROM MATERIA JOIN CARRERA ON MATERIA.id_carrera = CARRERA.id_carrera JOIN HORARIO ON MATERIA.id_horario = HORARIO.id_horario JOIN AULA ON MATERIA.id_aula = AULA.id_aula ";
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_MATERIA": user[0],
            "ID_HORARIO": user[1],
            "ID_AULA": user[2],
            "ID_CARRERA": user[3],
            "MATERIA": user[4],
            "CREDITOS": user[5],
            "CUPO": user[6],
            "SEMESTRE":user[7],
            "NOMBRE": user[9],
            "HORA_INICIO_LUNES":user[12],
            "HORA_FINAL_LUNES":user[13],
            "Nombre":user[15]

        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//BUSCAR MATERIAS POR NOM RE
/*pETICION PARA LA SELECCIÓN DE MATERIAS, DEBE TENER EL MISMO NOMBRE */
router.get('/getMats/:MAT', async (req, res) => {
    const { MAT } = req.params;
    sql = `SELECT ID_DOCXMATH, DOCENTE.ID_DOCENTE, MATERIA.ID_MATERIA, MATERIA.MATERIA, DOCENTE.NOMBRE,DOCENTE.AP_PATERNO, DOCENTE.AP_MATERNO, AULA.NOMBRE, HORARIO.HORA_INICIO_LUNES
    FROM MATERIA
    INNER JOIN MATERIA_ASIGNADA_PROFESOR ON MATERIA.ID_MATERIA = MATERIA_ASIGNADA_PROFESOR.ID_MATERIA
    INNER JOIN DOCENTE ON MATERIA_ASIGNADA_PROFESOR.ID_DOCENTE = DOCENTE.ID_DOCENTE
    INNER JOIN AULA ON MATERIA.ID_AULA = AULA.ID_AULA
    INNER JOIN HORARIO ON MATERIA.ID_HORARIO = HORARIO.ID_HORARIO WHERE MATERIA_ASIGNADA_PROFESOR.ID_DOCXMATH =:MAT
`;
    let result = await BD.Open(sql, [MAT], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_DOCXMATH":user[0],
            "ID_DOCENTE":user[1],
            "ID_MATERIA":user[2],
            "MATERIA": user[3],
            "NOMBRE": user[4],
            "AP_PATERNO": user[5],
            "AP_MATERNO": user[6],
            "HORA_INICIO_LUNES": user[7],
            "HORA_FINAL_LUNES": user[8],
            "AULA": user[9]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//--------------------------------------------------------------OPERACIONES CON DOCXMAT
router.get('/getAllMats', async (req, res) => {
    sql = `SELECT ID_DOCXMATH,DOCENTE.ID_DOCENTE, MATERIA.ID_MATERIA, MATERIA.MATERIA, DOCENTE.NOMBRE,DOCENTE.AP_PATERNO, DOCENTE.AP_MATERNO, AULA.NOMBRE, HORARIO.HORA_INICIO_LUNES
    FROM MATERIA
    INNER JOIN MATERIA_ASIGNADA_PROFESOR ON MATERIA.ID_MATERIA = MATERIA_ASIGNADA_PROFESOR.ID_MATERIA
    INNER JOIN DOCENTE ON MATERIA_ASIGNADA_PROFESOR.ID_DOCENTE = DOCENTE.ID_DOCENTE
    INNER JOIN AULA ON MATERIA.ID_AULA = AULA.ID_AULA
    INNER JOIN HORARIO ON MATERIA.ID_HORARIO = HORARIO.ID_HORARIO
`;
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "ID_DOCXMATH":user[0],
            "ID_DOCENTE":user[1],
            "ID_MATERIA":user[2],
            "MATERIA": user[3],
            "NOMBRE": user[4],
            "AP_PATERNO": user[5],
            "AP_MATERNO": user[6],
            "HORA_INICIO_LUNES": user[7],
            "HORA_FINAL_LUNES": user[8],
            "AULA": user[9]
        }
        Users.push(userSchema);
    })
    res.json(Users);
})
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
//1.- Obtener datos del docente
router.get('/getAllDocentes', async (req, res) => {
    const { id } = req.params;
    sql = "select * from Docente";
    let result = await BD.Open(sql, [], false);
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
//1.- Obtener datos del docente
router.get('/getAllAulas', async (req, res) => {
    sql = "select * from aula";
    let result = await BD.Open(sql, [], false);
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
//-----obtener todos los horario
//1.- Obtener datos del horario
router.get('/getAllHorarios', async (req, res) => {
    sql = "select * from Horario ";
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Horario": user[0],
            "Hora_Inicio_Lunes": user[1],
            "Hora_Final_Lunes": user[2],

        }
        Users.push(userSchema);
    })
    res.json(Users);
})
//Agregar un horario
router.post('/addHorario', async (req, res) => {
    const { ID_HORARIO, HORA_INICIO_LUNES, HORA_FINAL_LUNES} = req.body;

    //Secuencia sql para poder agregar el alumno a la base de datos
    sql = "insert into HORARIO  values (:ID_HORARIO, :HORA_INICIO_LUNES, :HORA_FINAL_LUNES)"

    await BD.Open(sql, [ID_HORARIO, HORA_INICIO_LUNES, HORA_FINAL_LUNES], true);
    res.status(200).json({
        "ID_HORARIO": ID_HORARIO,
        "HORA_INICIO_LUNES": HORA_INICIO_LUNES,
        "HORA_FINAL_LUNES":HORA_FINAL_LUNES,  
    })
    
});
//Borrar horario
router.delete("/deleteHorario/:ID_HORARIO", async (req, res) => {
    const { ID_HORARIO } = req.params;
   

    //También tenemos que eliminar las materias asignadas que tiene
    sql = 'delete from horario where ID_HORARIO = :ID_HORARIO';
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [ID_HORARIO], true);
    //También tenemos que eliminar las materias asignadas que tiene
   
    //MENSAJE DE ERROR
    res.json({ "msg": "Horario Eliminada" })
})
//UPDATE HORARIO
router.put("/updateHorario/:ID_HORARIO", async (req, res) => {
    const { HORA_INICIO_LUNES, HORA_FINAL_LUNES } = req.body;
    const { ID_HORARIO } = req.params;
    sql = "update HORARIO set HORA_INICIO_LUNES=:HORA_INICIO_LUNES, HORA_FINAL_LUNES=:HORA_FINAL_LUNES where ID_HORARIO=:ID_HORARIO";
      
    await BD.Open(sql, [ HORA_INICIO_LUNES, HORA_FINAL_LUNES,ID_HORARIO], true);
    
    res.status(200).json({
      "HORA_INICIO_LUNES": HORA_INICIO_LUNES,
      "HORA_FINAL_LUNES": HORA_FINAL_LUNES,
    });
  });
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
//UPDATE
router.put("/updateAula/:ID_AULA", async (req, res) => {
    const { NOMBRE, EDIFICIO, CAPACIDAD } = req.body;
    const { ID_AULA } = req.params;
    sql = "update AULA set NOMBRE=:NOMBRE, EDIFICIO=:EDIFICIO, CAPACIDAD=:CAPACIDAD where ID_AULA=:ID_AULA";
      
    await BD.Open(sql, [NOMBRE, EDIFICIO, CAPACIDAD, ID_AULA], true);
    
    res.status(200).json({
      "NOMBRE": NOMBRE,
      "EDIFICIO": EDIFICIO,
      "CAPACIDAD": CAPACIDAD
    });
  });
  
//Borrar materia
router.delete("/deleteAula/:Id_Aula", async (req, res) => {
    const { Id_Aula } = req.params;
   

    //También tenemos que eliminar las materias asignadas que tiene
    sql = 'delete from aula where Id_Aula = :Id_Aula';
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [Id_Aula], true);
    //También tenemos que eliminar las materias asignadas que tiene
   
    //MENSAJE DE ERROR
    res.json({ "msg": "Aula Eliminada" })
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
router.put("/updateDocente/:ID_DOCENTE", async (req, res) => {
    const {   NOMBRE, AP_PATERNO, AP_MATERNO } = req.body;
    const {ID_DOCENTE} = req.params;
    sql = "update Docente set NOMBRE=:NOMBRE, AP_PATERNO=:AP_PATERNO, AP_MATERNO=:AP_MATERNO where ID_DOCENTE=:ID_DOCENTE";
    
    await BD.Open(sql, [  NOMBRE, AP_PATERNO,AP_MATERNO, ID_DOCENTE], true);
    //Error con los números.
    //Deb ser error del postman
    res.status(200).json({
        "NOMBRE": NOMBRE,
        "AP_PATERNO": AP_PATERNO,
        "AP_MATERNO": AP_MATERNO
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
//DELETE ESSTA ES LA SENTENCIA PARA ELIMINAR DOCENTES
router.delete("/deleteDocente/:Id_Docente", async (req, res) => {
    const { Id_Docente } = req.params;
   

    //También tenemos que eliminar las materias asignadas que tiene
    sql = `delete from carga
    where id_docxmath in (select id_docxmath from materia_asignada_profesor where id_docente = :Id_Docente)`;
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [Id_Docente], true);
    //También tenemos que eliminar las materias asignadas que tiene
    sql = "delete from materia_asignada_profesor where Id_Docente=:Id_Docente";
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [Id_Docente], true);
    //HACEMOS LA SENTENCIA SQL
    sql = "delete from docente where Id_Docente=:Id_Docente";
    //PEDIMOS A LA BASE DE DATOS
    await BD.Open(sql, [Id_Docente], true);
    //MENSAJE DE ERROR
    res.json({ "msg": "Docente Eliminado" })
})

//--------- AGREGAR MATERIA
router.post('/addMateria', async (req, res) => {
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
//-------UPDATE MATERIA
router.put("/updateMateria/:ID_MATERIAA", async (req, res) => {
    const { HORA_INICIO_LUNES, HORA_FINAL_LUNES } = req.body;
    const { ID_MATERIA } = req.params;
    sql = "update HORARIO set HORA_INICIO_LUNES=:HORA_INICIO_LUNES, HORA_FINAL_LUNES=:HORA_FINAL_LUNES where ID_HORARIO=:ID_HORARIO";
      
    await BD.Open(sql, [ HORA_INICIO_LUNES, HORA_FINAL_LUNES,ID_HORARIO], true);
    
    res.status(200).json({
      "HORA_INICIO_LUNES": HORA_INICIO_LUNES,
      "HORA_FINAL_LUNES": HORA_FINAL_LUNES,
    });
  });
//-------------------AGREGAR DOCENTE
router.post('/addDocente', async (req, res) => {
    const { ID_DOCENTE, NOMBRE, AP_PATERNO, AP_MATERNO} = req.body;

    //Secuencia sql para poder agregar el alumno a la base de datos
    sql = "insert into DOCENTE(ID_DOCENTE, NOMBRE, AP_PATERNO, AP_MATERNO) values (:ID_DOCENTE, :NOMBRE, :AP_PATERNO, :AP_MATERNO)"

    await BD.Open(sql, [ID_DOCENTE, NOMBRE, AP_PATERNO, AP_MATERNO], true);
    res.status(200).json({
        "ID_DOCENTE": ID_DOCENTE,
        "NOMBRE": NOMBRE,
        "AP_PATERNO":AP_PATERNO,
        "AP_MATERNO":AP_MATERNO,
       
        
    })
    
});
//-----------------ADD AULA
router.post('/addAula', async (req, res) => {
    const { ID_AULA, NOMBRE, EDIFICIO, CAPACIDAD} = req.body;

    //Secuencia sql para poder agregar el alumno a la base de datos
    sql = "insert into AULA(ID_AULA, NOMBRE, EDIFICIO, CAPACIDAD) values (:ID_AULA, :NOMBRE, :EDIFICIO, :CAPACIDAD)"

    await BD.Open(sql, [ID_AULA, NOMBRE, EDIFICIO, CAPACIDAD], true);
    res.status(200).json({
        "ID_DOCENTE": ID_AULA,
        "NOMBRE": NOMBRE,
        "EDIFICIO":EDIFICIO,
        "CAPACIDAD":CAPACIDAD,
           
    })
    
});
//-------agregar nueva materia
router.post('/addNewMateria', async (req, res) => {
    const { ID_MATERIA, ID_HORARIO, ID_AULA, ID_CARRERA, MATERIA, CREDITOS, CUPO, SEMESTRE} = req.body;

    //Secuencia sql para poder agregar el alumno a la base de datos
    //Primero agregarmos la materia sin asignar el docente
    sql = "INSERT INTO MATERIA (ID_MATERIA, ID_HORARIO, ID_AULA, ID_CARRERA, MATERIA,CREDITOS,CUPO,SEMESTRE) values(:ID_MATERIA, :ID_HORARIO, :ID_AULA, :ID_CARRERA, :MATERIA, :CREDITOS, :CUPO, :SEMESTRE)";

     await BD.Open(sql, [ID_MATERIA, ID_HORARIO, ID_AULA, ID_CARRERA, MATERIA, CREDITOS, CUPO, SEMESTRE], true);
/* 
    sql = 'commit';
    await BD.Open(sql, [], true);

    //Asignamos la materia a un docente
    sql = ` INSERT INTO MATERIA_ASIGNADA_PROFESOR VALUES(${Math.floor(Math.random() * 100000) + 1}, :ID_DOCENTE, :ID_MATERIA) `

     await BD.Open(sql, [ID_DOCENTE, ID_MATERIA], true);
 */
     res.status(200).json()
    
})
router.post('/postMateria/:ID_MATERIA/:HORA/:AULA/:ID_CARRERA/:MATERIA/:CREDITOS/:CUPO/:SEMESTRE', async (req, res) => {
    const { ID_MATERIA, HORA, AULA, ID_CARRERA, MATERIA, CREDITOS, CUPO, SEMESTRE} = req.params;

    //Secuencia sql para poder agregar el alumno a la base de datos
    //Primero agregarmos la materia sin asignar el docente
    sql = "INSERT INTO MATERIA (ID_MATERIA, ID_HORARIO, ID_AULA, ID_CARRERA, MATERIA,CREDITOS,CUPO,SEMESTRE) SELECT :ID_MATERIA, ID_HORARIO, ID_AULA, ID_CARRERA, :MATERIA, :CREDITOS, :CUPO, :SEMESTRE FROM HORARIO, AULA, CARRERA WHERE HORA_INICIO_LUNES = :HORA AND AULA.NOMBRE= :AULA AND ID_CARRERA = :ID_CARRERA";

     await BD.Open(sql, [ID_MATERIA, HORA, AULA, ID_CARRERA, MATERIA, CREDITOS, CUPO, SEMESTRE], true);
/* 
    sql = 'commit';
    await BD.Open(sql, [], true);

    //Asignamos la materia a un docente
    sql = ` INSERT INTO MATERIA_ASIGNADA_PROFESOR VALUES(${Math.floor(Math.random() * 100000) + 1}, :ID_DOCENTE, :ID_MATERIA) `

     await BD.Open(sql, [ID_DOCENTE, ID_MATERIA], true);
 */
     res.status(200) .json()
    
})

module.exports = router;