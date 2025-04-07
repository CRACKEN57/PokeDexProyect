export interface PokemonType {
   sprites: {
         "generation-ix": {
              "scarlet-violet": {
                name_icon: string;
              };
         }
   }

}
export interface PokemonAbility{
    slot: number,
    ability:{
        name : string;
        url : string;
    }
    isHidden: string;
}

export interface PokemonMoves{
    moves:{
        name:string;
    }
}

export interface Pokemon {
    id: string;
    name: string;
    image: string;
    type: PokemonType[];
    ability: PokemonAbility[];
    moves: PokemonMoves[];
    shiny: string;
}


