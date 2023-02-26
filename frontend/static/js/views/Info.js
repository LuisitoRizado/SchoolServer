import AbstractView from "./AbstractView.js";
// recuperamos el querystring
const querystring = window.location.search
console.log(querystring) // '?q=pisos+en+barcelona&ciudad=Barcelona'

// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(querystring)
const NControl = params.get('ncontrol');
console.log(NControl);
//Fetch api
  function fetchApi(){
    const peticion = 'http://localhost:3030/getAlumno/'+NControl;
      fetch(peticion)
   .then((response)=>response.json())
   .then((data) => mostrarData(data));
}
fetchApi();

const mostrarData = (data)=>{
    console.log(data);
    let body = '';
    for(let i = 0; i<data.length; i++){
        body += `<h1>Mis datos</h1>
        <hr>
        <div class='infoDiv'>
        <div class='profileDiv'>
        <img src='https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg' alt=''>
        <div>
        <h3>${data[i].Nombre} ${data[i].AP_PATERNO}</h3>
        <h4 class='text-primary'>Estudiante</h4>
        </div>
        </div>
        <h3 class='bg-dark text-white'>Datos generales</h3>
        <p><kbd class='bg-danger'>Nombre:</kbd> ${data[i].Nombre} ${data[i].AP_PATERNO} ${data[i].AP_MATERNO}</p>
        <p><kbd class='bg-danger'>Correo Electrónico:</kbd> laog.sonic4@gmail.com</p>
        <h3 class='bg-dark text-white'>Información escolar</h3>
        <p><kbd class='bg-danger'>Número control:</kbd> ${data[i].NControl}</p>
        <p><kbd class='bg-danger'>Estatus:</kbd>ACTIVO</p>
        <p><kbd class='bg-danger'>Semestre:</kbd> ${data[i].SEMESTRE} </p>
        <p><kbd class='bg-danger'>Carrera:</kbd> ${data[i].ID_Carrera}</p>
        <p><kbd class='bg-danger'>Especialidad:</kbd> ${data[i].ESPECIALIDAD}r</p>
       `;
    }
    console.log(body)
    document.querySelector('.datosGeneralesDiv').innerHTML = body;
    
}
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Settings')
    }
    async getHtml(){
        return `
        <hr>
        <div class='contenedorDatosDiv row'>
        <div class='datosGeneralesDiv col-md-12 p-2 m-1 shadow'>
        
        </div>
      
        </div>
        </div>
        `;
    }
}