import { concatMap, from, map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { IPokeInterface, pokecolor, pokeinfo, Result } from "../interface/pokeinterface";
import { ordenlist } from "../logic/pokebody";

export function getCap(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
};

export const poke$ = (): Observable<IPokeInterface>=> {
    return ajax.getJSON("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1110");
};

export const prevpoke$ = (url: string): Observable<any> => {
    return ajax.getJSON<IPokeInterface>(url).pipe(
        map(res => res.results),
        concatMap(res => from(res).pipe(
            map((res: Result) => ajax.getJSON<pokeinfo>(res.url)),
            concatMap((pokemon) => from(pokemon).pipe(
                map((poke: pokeinfo) => {
                const card = document.createElement("li");
                const img = document.createElement("img");
                const title = document.createElement("h2");
                const color  = pokecolor[poke.types[0].type.name];

                card.setAttribute("class", "card shadow rounded");
                title.setAttribute("class", "text-center");
                img.setAttribute("style", `background-color:${color};`);
                img.src = poke.sprites.front_default;

                card.append(img);
                title.append(getCap(poke.name));
                card.append(title);
                ordenlist?.append(card);
                return poke;
                })
            ))
        )),
    );
}