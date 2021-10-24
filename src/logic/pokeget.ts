import { prevpoke$, } from "../services/pokeservices";
import { busqueda$ } from "./busqueda$";
import { botones$ } from "./botones$";



export const init = () => { 
    prevpoke$(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`).subscribe();
};

init();
busqueda$();
botones$();