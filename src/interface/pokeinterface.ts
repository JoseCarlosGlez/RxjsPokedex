export interface IPokeInterface {
    [x: string]: any;
    count: number;
    next: string;
    previous?: any;
    results: Result[];
  }
  
  export interface Result {
    name: string;
    url: string;
  }
  
  export interface pokeinfo {
    form_name: string;
    form_names: any[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: any[];
    order: number;
    pokemon: Pokemon;
    sprites: Sprites;
    types: Type[];
    version_group: Pokemon;
  }
  
  export interface Type {
    slot: number;
    type: Pokemon;
  }
  
  export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
  }
  
  interface Pokemon {
    name: string;
    url: string;
  }
  
  export const pokecolor: {[key: string]: string} = {
    normal : "#A8A77A",
    fire : "#EE8130",
    water : "#6390F0",
    electric : "#F7D02C",
    grass : "#7AC74C",
    ice : "#96D9D6",
    fighting : "#C22E28",
    poison : "#A33EA1",
    ground : "#E2BF65",
    flying : "#A98FF3",
    psychic : "#F95587",
    bug : "#A6B91A",
    rock : "#B6A136",
    ghost : "#735797",
    dragon : "#6F35FC",
    dark : "#705746",
    steel : "#B7B7CE",
    fairy : "#D685AD",
  }