const busquedadiv = document.querySelector("#Busqueda");
export const botonesdiv = document.querySelector("#botones");
const body = document.querySelector("body");
export const ordenlist = document.querySelector("#cardGroup");
export const busqueda = document.createElement("input");
export const boton1 = document.createElement("button");
export const boton2 = document.createElement("button");

body!.style.backgroundColor = "#f5f5f5";
busqueda.setAttribute("type", "text");
busqueda.setAttribute("placeholder", "Buscar Pokemon");
busqueda.setAttribute("class", "form-control shadow");
boton1.setAttribute("class", "col btn btn-outline-danger shadow");
boton1.setAttribute("id", "Anterior");
boton2.setAttribute("class", "col btn btn-outline-danger shadow");
boton2.setAttribute("id", "Siguiente");
boton1.innerHTML = "<< Anterior";
boton2.innerHTML = "Siguiente >>";

busquedadiv?.appendChild(busqueda);
botonesdiv?.appendChild(boton1);
botonesdiv?.appendChild(boton2);
