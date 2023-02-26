import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async getHtml() {
    return `
    <h4 class="mt-5 text-secondary">Selección de materias para el ciclo Enero Junio 2023</h4>
    <div class="alert alert-danger mt-4 p-3" role="alert">
        Si el grupo a seleccionar no cumple con los integrantes mínimos se dará de baja
      </div>
      <p>Selecciona el grupo en el cuál deseas inscribirte</p>
    <table class="table  table-bordered">
        <thead class="bg-body-secondary">
          <tr class='bg-body-secondary'>
            <th scope="col">Seleccionar</th>
            <th scope="col">Materia</th>
            <th scope="col">Profesor</th>
            <th scope="col">Campus</th>
            <th scope="col">Capacidad</th>
            <th scope="col">Aula</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
            
  
      
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td><button class="btn btn-success">Seleccionar</button></td>
            <td>Administración de base de datos</td>
            <td>Jose Gallegos</td>
            <td>Tec Saltillo</td>
            <td>50</td>
          <td>A12</td>
            <td>10:00-11:00</td>
            <td>10:00-11:00</td>
            <td>10:00-11:00</td>
            <td>10:00-11:00</td>
            <td>10:00-11:00</td>
  
      
            
      
      
          </tr>
          <tr>
            <td><button class="btn btn-success">Seleccionar</button></td>
          <td>Conmutación de redes</td>
          <td>Juan López López</td>
          <td>Tec Saltillo</td>
          <td>50</td>
          <td>A12</td>
          <td>9:00-10:00</td>
          <td>9:00-10:00</td>
          <td>9:00-10:00</td>
          <td>9:00-10:00</td>
          <td>9:00-10:00</td>
      
          </tr>
          <tr>
         
            <td><button class="btn btn-success">Seleccionar</button></td>
          <td>Lenguajes y autómatas 1</td>
          <td>Juan Frautro de la O</td>
          <td>Tec Saltillo</td>
          <td>50</td>
          <td>A12</td>
          <td>11:00-12:00</td>
          <td>11:00-12:00</td>
          <td>11:00-12:00</td>
          <td>11:00-12:00</td>
          <td>11:00-12:00</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-warning">Regresar</button>

        `;
  }
}
