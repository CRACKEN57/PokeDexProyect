import axios from "axios";

const PokeAbility = axios.create({
    baseURL:"https://pokeapi.co/api/v2/type"
})

export default PokeAbility