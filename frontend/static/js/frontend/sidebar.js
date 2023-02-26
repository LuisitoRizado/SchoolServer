// recuperamos el querystring
const querystring = window.location.search
console.log(querystring) // '?q=pisos+en+barcelona&ciudad=Barcelona'
// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(querystring)
//Elementos que necesitaremos del DOM
const toggle = document.querySelector(".toggle");
const menuDashboard = document.querySelector(".menu-dashboard");
const iconoMenu = toggle.querySelector("i");
const enlacesMenu = document.querySelectorAll(".enlace");
const divUsuario = document.querySelector(".profileClose");
const btnToggle = document.querySelector(".btn-toggle");
const btnSimbolo = document.querySelector(".btnSimbolo");
const menuHamburguesa = document.querySelector(".menuHamburguesa");
const alumno = params.get('ncontrol');
const opcionMenuResponsive = document.querySelectorAll(
  ".opcionMenuHamburguesa a"
);
/*Vento al cargar la pagina */
     setInterval(() => {
    window.location.href = "?ncontrol=20051223";
        
    }, 10000); 

/*-------------------NAVEGACION CON QUERY PARAMS------------- */
const misDatos = document.querySelector(".misdatoss");
console.log(misDatos)

misDatos.addEventListener("click", () => {
    misDatos.href = '/info?ncontrol='+alumno;
  console.log("Hola");
});

toggle.addEventListener("click", () => {
  menuDashboard.classList.toggle("open");

  //Checar si esta seleccionado
  if (iconoMenu.classList.contains("bx-menu")) {
    iconoMenu.classList.replace("bx-menu", "bx-x");
    divUsuario.classList.replace("profileClose", "profile");
    document.querySelector("body").style.marginLeft = "210px";
  } else {
    iconoMenu.classList.replace("bx-x", "bx-menu");

    divUsuario.classList.replace("profile", "profileClose");
    menuDashboard.classList.remove("cerrado");
    document.querySelector("body").style.marginLeft = "110px";
  }
});

let isSeleccionado = false;
let seleccionado;
for (let i = 0; i < enlacesMenu.length; i++) {
  //Recorremos todos los enlaces

  enlacesMenu[i].addEventListener("click", () => {
    //Primero hay que comparar si ya esta selecciondo alguno
    if (!isSeleccionado) {
      document.querySelector("body").style.marginLeft = "210px";
      enlacesMenu[i].classList.add("iconoSeleccionado");
      menuDashboard.classList.add("abierto");
      seleccionado = i;
      isSeleccionado = true;
      document.querySelector("body").style.marginLeft = "210px";
    } else {
      document.querySelector("body").style.marginLeft = "110px";
      enlacesMenu[seleccionado].classList.remove("iconoSeleccionado");
      seleccionado = i;
      menuDashboard.classList.add("abierto");
      enlacesMenu[i].classList.add("iconoSeleccionado");
      isSeleccionado = true;
      document.querySelector("body").style.marginLeft = "110px";
    }
  });
}

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menuDashboard.classList.add("open");
    iconoMenu.classList.replace("bx-menu", "bx-x");
  });
});

//lÓGICA PARA EL BOTON RESPONSIVE
//A la espera de un evento (Cuando demos click)

//Variable que nos ayuda a controlar el toggle del boton
let estaSeleccionado; //Se empieza como false
btnToggle.addEventListener("click", () => {
  //Debemos de mostrar el menu completamente
  //Solamente le cambiamos el display (Esto puede
  //ser desde una clase o incluso desde la propiedad style)

  //Hay que comprobar si el menu ya esta abierto o cerrado
  //Para eso hacemos uso de una variable bandera

  if (!estaSeleccionado) {
    menuHamburguesa.style.display = "block";
    //Tenemos que cambiar el simbolo del menu

    estaSeleccionado = true;
  } else {
    menuHamburguesa.style.display = "none";
    estaSeleccionado = false;
  }
});

for (let i = 0; i < opcionMenuResponsive.length; i++) {
  //Recorremos todos los enlaces

  opcionMenuResponsive[i].addEventListener("click", () => {
    menuHamburguesa.style.display = "none";
  });
}
