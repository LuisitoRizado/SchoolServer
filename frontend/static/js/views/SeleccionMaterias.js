import AbstractView from "./AbstractView.js";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Posts')
    }
    async getHtml(){
        return `
        <div class="materiasSeleccionadas shadow border border-dark ">
        <h4 class="text-center bg-body-secondary">Grupos seleccionados por el momento.</h4>
        <table class="table table-bordered text-center">
            <thead>
              <tr class="bg-body-secondary">
                <th scope="col">Semestre</th>
                <th scope="col">Materia</th>
                <th scope="col">Profesor</th>
                <th scope="col">Créditos</th>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
      
          
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>6</td>
                <td>Administración de base de datos</td>
                <td>Jose Gallegos</td>
                <td>5</td>
                <td>10:00-11:00</td>
                <td>10:00-11:00</td>
                <td>10:00-11:00</td>
                <td>10:00-11:00</td>
                <td>10:00-11:00</td>
                <td><button class="btn btn-danger">Eliminar</button></td>
        
              </tr>
              <tr>
              <td>6</td>
              <td>Conmutación de redes</td>
              <td>Juan López López</td>
              <td>4</td>
              <td>9:00-10:00</td>
              <td>9:00-10:00</td>
              <td>9:00-10:00</td>
              <td>9:00-10:00</td>
              <td>9:00-10:00</td>
            
              <td><button class="btn btn-danger">Eliminar</button></td>
          
              </tr>
              <tr>
             
              <td>6</td>
              <td>Lenguajes y autómatas 1</td>
              <td>Juan Frautro de la O</td>
              <td>5</td>
              <td>11:00-12:00</td>
              <td>11:00-12:00</td>
              <td>11:00-12:00</td>
              <td>11:00-12:00</td>
              <td>11:00-12:00</td>
              <td><button class="btn btn-danger">Eliminar</button></td>

              </tr>
              <tr>
             
                <td class="fw-bold">Créditos totales: </td>
                <td></td>
                <td></td>
                <td>15</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                
  
                </tr>
            </tbody>
          </table>
          <button class='btn btn-success p-2 m-2'>Guardar Horario</button>
      </div>

      <div class="btn-group mt-4">
        <button class="btn btn-secondary btn-lg" type="button">
          Selecciona un semestre
        </button>
        <button
          type="button"
          class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">1</a></li>
          <li><a class="dropdown-item" href="#">2</a></li>
          <li><a class="dropdown-item" href="#">3</a></li>
          <li><a class="dropdown-item" href="#">4</a></li>
          <li><a class="dropdown-item" href="#">5</a></li>
          <li><a class="dropdown-item" href="#">6</a></li>
          <li><a class="dropdown-item" href="#">7</a></li>
          <li><a class="dropdown-item" href="#">8</a></li>
          <li><a class="dropdown-item" href="#">9</a></li>
        </ul>
      </div>
      <table class="table mt-5 table-bordered">
      <thead>
        <tr>
          <th scope="col">Semestre</th>
          <th scope="col">Materia</th>
          <th scope="col">Profesor</th>
          <th scope="col">Grupo</th>
          <th scope="col">Lunes</th>
          <th scope="col">Martes</th>
          <th scope="col">Miercoles</th>
          <th scope="col">Jueves</th>
          <th scope="col">Viernes</th>
          <th scope="col"></th>

    
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>6</td>
          <td>Administración de base de datos</td>
          <td>Jose Gallegos</td>
          <td>A</td>
          <td>10:00-11:00</td>
          <td>10:00-11:00</td>
          <td>10:00-11:00</td>
          <td>10:00-11:00</td>
          <td>10:00-11:00</td>
          <td><a href='/seleccionarMateria'class="btn btn-primary">Ver grupos</a></td>


    
          
    
    
        </tr>
        <tr>
        <td>6</td>
        <td>Conmutación de redes</td>
        <td>Juan López López</td>
        <td>A</td>
        <td>9:00-10:00</td>
        <td>9:00-10:00</td>
        <td>9:00-10:00</td>
        <td>9:00-10:00</td>
        <td>9:00-10:00</td>
        <td><a href='/seleccionarMateria'class="btn btn-primary">Ver grupos</a></td>

    
        </tr>
        <tr>
       
        <td>6</td>
        <td>Lenguajes y autómatas 1</td>
        <td>Juan Frautro de la O</td>
        <td>C</td>
        <td>11:00-12:00</td>
        <td>11:00-12:00</td>
        <td>11:00-12:00</td>
        <td>11:00-12:00</td>
        <td>11:00-12:00</td>
        <td><a href='/seleccionarMateria'class="btn btn-primary">Ver grupos</a></td>
        </tr>
      </tbody>
    </table>
      
        `;
    }
}