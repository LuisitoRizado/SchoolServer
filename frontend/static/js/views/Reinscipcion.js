import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async getHtml() {
    return `
    <h1>Reinscripción</h1>
    <hr>
    <div class='documentosDiv row'>
    <div class="card m-3 col-md-5 shadow" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="https://cdn-icons-png.flaticon.com/512/3778/3778120.png" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Datos de reinscripción</h5>
    <p class="card-text">Accede a los datos de tu reinscripción.</p>
    
    <a href="/datosReinscripcion" class="btn btn-primary">Acceder</a>
  </div>
</div>
</div>
</div>
<div class="card m-3 col-md-5 shadow" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="https://cdn-icons-png.flaticon.com/512/3557/3557635.png" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Grupos disponibles</h5>
    <p class="card-text">Comprueba los grupos disponibles para este semestre.</p>
    <br>
    <a href="/materiasDisponibles" class="btn btn-primary">Acceder</a>
  </div>
</div>
</div>
</div>
    </div>
    
    <div class='documentosDiv row'>
    <div class="card m-3 col-md-5 shadow" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Materias de Verano</h5>
    <p class="card-text">Materias disponibles para cursar en verano.</p>
    
    <a href="/" class="btn btn-danger disabled">No disponible</a>
  </div>
</div>
</div>
</div>
<div class="card m-3 col-md-5 shadow" style="max-width: 540px;">
<div class="row g-0">
<div class="col-md-4">
  <img src="https://cdn-icons-png.flaticon.com/512/167/167756.png" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Selección de materias</h5>
    <p class="card-text">Selecciona las materias para tu próximo semestre</p>
    <br>
    <a href="/seleccionMaterias" class="btn btn-primary">Acceder</a>
  </div>
</div>
</div>
</div>
    </div>
        
        `;
  }
}
