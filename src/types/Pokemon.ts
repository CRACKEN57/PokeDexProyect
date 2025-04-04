export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface Pokemon {
    id: string;
    name: string;
    image: string;
    type: PokemonType[];
    shiny: string;
}
