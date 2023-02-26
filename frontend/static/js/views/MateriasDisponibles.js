import AbstractView from "./AbstractView.js";
const urlOriginal = window.location.href;
// recuperamos el querystring
const urlActual = window.location.href + "&";
// usando el querystring, creamos un objeto del tipo URLSearchParams
const querystring = window.location.search;
console.log(querystring); // '?q=pisos+en+barcelona&ciudad=Barcelona'

// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(querystring);
const NControl = params.get("ncontrol");
console.log(NControl);
//Fetch api
//Funcion que se ejecutara una vez haya dado click en el semestre
function seSeleccionoSemestre() {
  const params = new URLSearchParams(querystring);
  const NControl = params.get("ncontrol");
  console.log(NControl);
  const sem = params.get('semestre');
  //Tenemos  que eliminar el query param anterior
  //Hay que leer los query params de la url en la esquetamos
  const peticion = "http://localhost:3030/getMaterias/" + sem;
  fetch(peticion)
    .then((response) => response.json())
    .then((data) => mostrarData(data));
  //Eliminamos el query param
}
//seSeleccionoSemestre()

//-----PINTAR LOS DATOS

//    document.querySelector('.contenedor').innerHTML = body;
const mostrarData = (data) => {
  console.log(data);
  let body = `
  <div >
<table class="table mt-5 table-bordered">
<thead>
  <tr>
    <th scope="col">Id_Materia</th>
    <th scope="col">Materia</th>
    <th scope="col">Cupo</th>
   
  </tr>
</thead>
<tbody>
`;
  for (let i = 0; i < data.length; i++) {
    body += `
      <tr>
        <td> ${data[i].ID_MATERIA}</td>
        <td> ${data[i].MATERIA}</td>
        <td> ${data[i].CUPO}</td>
      </tr>
     `;
  }
  body += `</tbody>
        </table>
        </div>
        `;
  console.log(body);

  document.querySelector(".contenedorApoyo").innerHTML = body;
};

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("reinscripcion");
  }
  async getHtml() {
    return `
    <div class='contenedor d-flex justify-content-center flex-column align-items-center'>
    <div class='opciones row '>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1 " onClick='seSeleccionoSemestre'><a class='' href='?semestre=1'>1</a></div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'><a href='${
      urlActual + "&semestre=2"
    }'>2</a></div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre' ><a href='${
      urlActual + "&semestre=3"
    }'>3</a></div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'><a href='${
      urlActual + "&semestre=4"
    }'>4</a></div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'><a href='${
      urlActual + "&semestre=5"
    }' >5</a></div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'><a href='${
      urlActual + "&semestre=6"
    }'>6</a></div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'>7</div>
    <div class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'>8</div>
    <button class=" p-2 bg-primary text-white w-25 text-center col-md-4 m-1" onClick='seSeleccionoSemestre'>9</button>

    </div>
    
  </div>

  <div class='contenedorApoyo'>jsd</div>
        `;
  }
}
