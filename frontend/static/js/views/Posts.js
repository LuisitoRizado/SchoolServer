import AbstractView from "./AbstractView.js";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Posts')
    }
    async getHtml(){
        return `
        <h1>Horario</h1>
        <hr>
        <p>
        Revisa tus clases!
        </p>
        <div class="horario">
        <div class="diasSemana row">
          <div class="dia col-md-2">Lunes</div>
          <div class="dia col-md-2">Martes</div>
          <div class="dia col-md-2">Miercoles</div>
          <div class="dia col-md-2">Jueves</div>
          <div class="dia col-md-2">Viernes</div>
        </div>
        <div class="contenedorMaterias row">
          <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
  
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            <div class="col-md-2 materia shadow" ">
              <div class="card-body">
                <h5 class="card-title text-primary"><i class="bi bi-alarm-fill"></i> 9:00 - 10:00 </h5>
                <h6 class="card-subtitle mb-2 text-muted">Redes de computadoras</h6>
                <p class="card-text">Aula: </p>
                <p>Profesor: </p>
                <p>Grupo: </p>
               </div>
            </div>
            
        </div>
      </div>
      
        `;
    }
}