import { prevpoke$ } from "../services/pokeservices";
import { boton1, botonesdiv } from "./pokebody";
import { init } from "./pokeget";

let offset = 0;
let limit = 20;

export const botones$ = () => {
    botonesdiv?.addEventListener("click", (e: any) => {
        if (e.target.id === "Siguiente") {
            offset = offset + 20;
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => card.remove());
            prevpoke$(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).subscribe();
            
        } else {
            offset = offset - 20;
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => card.remove());
            if (offset > 20) {
                prevpoke$(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).subscribe();
                
            } else {
                offset = 20;
                init();
            }
            
        }
    })
}
