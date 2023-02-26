import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async getHtml() {
    return `
        <h1>Documentos</h1>
        <hr>
        <div class='documentosDiv row'>
        <div class="card m-3 col-md-5 shadow" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://thumbs.dreamstime.com/z/un-mont%C3%B3n-de-libros-libro-abierto-y-l%C3%A1piz-suministros-escolares-objetos-dibujos-animados-vectoriales-aislados-en-fondo-blanco-192812588.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Carga académica</h5>
        <p class="card-text">Puedes asignar, modificar o eliminar alguna materia a tu horario. Sólo en caso de ser posible.</p>
        
        <a href="#" class="btn btn-primary">Acceder</a>
      </div>
    </div>
  </div>
</div>
<div class="card m-3 col-md-5 shadow" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://previews.123rf.com/images/stockgiu/stockgiu1904/stockgiu190412712/123642082-elemento-de-estudio-certificado-diploma-de-dibujos-animados-ilustraci%C3%B3n-vectorial-dise%C3%B1o-gr%C3%A1fico.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Cosntancias</h5>
        <p class="card-text">Lista de constancias disponibles para el alumno.</p>
        <br>
        <a href="#" class="btn btn-danger disabled">Acceder</a>
      </div>
    </div>
  </div>
</div>
        </div>
        `;
  }
}
