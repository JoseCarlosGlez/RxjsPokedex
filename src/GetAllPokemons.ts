import { concatMap, from, map, mergeMap, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

function GetPokemons() {
  return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon`).pipe(
    pluck<any, any>("results"),
    mergeMap((results: any) =>
      from(results).pipe(
        concatMap((pokemon: any) =>
          ajax.getJSON(pokemon.url).pipe(map(createCardsPokemon))
        )
      )
    )
  );
}

function createCardsPokemon(pokemon: any) {
  console.log(pokemon);
  const cardGroup = document.querySelector("#cardGroup");

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const imgCard = document.createElement("img");
  imgCard.setAttribute("class", "card-img-top");
  imgCard.setAttribute("src", pokemon.sprites.front_default);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  const cardTitle = document.createElement("div");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerText = (<string>pokemon.name).toUpperCase();

  card.appendChild(imgCard);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);

  cardGroup!.appendChild(card);
}

GetPokemons().subscribe();
