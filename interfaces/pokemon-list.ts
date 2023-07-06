export interface Pokemones {
    count: number;
    next?: string;
    previous?: string;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url: string;
    uid: number,
    img: string
}
