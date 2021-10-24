import { concatMap, debounceTime, distinctUntilChanged, from, fromEvent, map, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { pokeinfo, pokecolor } from "../interface/pokeinterface";
import { getCap, poke$ } from "../services/pokeservices";
import { ordenlist, busqueda } from "./pokebody";
import { init } from "./pokeget";

export const busqueda$ = () => {fromEvent<KeyboardEvent>(busqueda, "keyup").pipe(
    debounceTime(500),
    pluck("target", "value"),
    distinctUntilChanged(),
    concatMap(value => poke$().pipe(
        map(poke => {
            if (value === "") {
                const cards = document.querySelectorAll(".card");
                cards.forEach(card => card.remove());
                init();
            } else {
                const pokemons$ = poke.results.filter(pokemon => pokemon.name.toLowerCase().includes((value as string).toLowerCase()));
                const cards = document.querySelectorAll(".card");
                cards.forEach(card => card.remove());
                from(pokemons$).pipe(
                    map(pokemons => ajax.getJSON<pokeinfo>(pokemons.url)),
                    concatMap(pokemon => from(pokemon).pipe(
                        map(poke => {
                            const card = document.createElement("li");
                            const img = document.createElement("img");
                            const title = document.createElement("h2");
                            const color  = pokecolor[poke.types[0].type.name];
                            

                            card.setAttribute("class", "card shadow rounded");
                            title.setAttribute("class", "text-center");
                            img.src = poke.sprites.front_default;
                            img.setAttribute("style", `background-color:${color};`);

                            card.append(img);
                            title.append(getCap(poke.name));
                            card.append(title);
                            ordenlist?.append(card);
                            return poke;
                        })
                    ))

                ).subscribe();
            }
        })
    ))
).subscribe();}
