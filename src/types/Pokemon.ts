export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonAbility{
    slot: number,
    ability:{
        name : string;
        url : string;
    }
    isHidden: string;
}

export interface Pokemon {
    id: string;
    name: string;
    image: string;
    type: PokemonType[];
    ability: PokemonAbility[];
    shiny: string;
}


