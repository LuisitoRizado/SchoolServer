import Dashboard from "./views/Dashboard.js"; //Importamos el dashboard
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import Reinscipcion from "./views/Reinscipcion.js";
import Documentos from "./views/Documentos.js";
import Info from "./views/Info.js";
import MateriasDisponibles from "./views/MateriasDisponibles.js";
import DatosReinscripcion from "./views/DatosReinscripcion.js";
import SeleccionMaterias from "./views/SeleccionMaterias.js";
import SeleccionarMateria from "./views/SeleccionarMateria.js";
const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}
const router = async ()=>{
    //Rutas de nuesta pagina web
    //Esto es el enrutador de la aplicacion web
    const routes = [
        {path:'/', view:Dashboard},
        {path:'/en-curso', view:Posts},
        {path:'/settings', view:Settings},
        {path:'/reinscripcion', view:Reinscipcion},
        {path:'/documentos', view:Documentos},
        {path:'/info', view:Info},
        {path:'/materiasDisponibles', view:MateriasDisponibles},
        {path:'/datosReinscripcion', view:DatosReinscripcion},
        {path:'/seleccionMaterias', view:SeleccionMaterias} ,
        {path:'/seleccionarMateria', view:SeleccionarMateria}  



    ];
    //Test each route for potential match
    const potentialMatches = routes.map(route =>{
        return {
            route: route,
            isMatch: location.pathname === route.path//Comprobar si coinciden
        }
    });
    let match = potentialMatches.find(potencialMatch=>potencialMatch.isMatch)
    //En caso de no encontrar una ruta valida
    if(!match){
        match = {
            route: routes[0],
            isMatch:true
        }
    }
    const view = new match.route.view();
    document.querySelector('#app').innerHTML = await view.getHtml();
    console.log(new match.route.view())
};
window.addEventListener('popstate',router)
document.addEventListener('DOMContentLoaded',()=>{
    //Con esto evitamos la recargacion de otra pagina
    document.body.addEventListener('click',(e)=>{
        if(e.target.matches('[data-link]')){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})



