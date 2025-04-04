import React, { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import PokeApi from "../api/PokeApi";
import PokeCard from "../components/PokeCard";
import { Pokemon } from "../types/Pokemon";
import HomeScreenStyles from "../styles/HomeScreen.styles";

const HomeScreens = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [PokemonId, setPokemonId] = useState(""); 
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (PokemonId) {
      fetchPokemon();
    }
  }, [PokemonId]);

  const fetchPokemon = async () => {
    try {
      const id = PokemonId || Math.floor(Math.random() * 1000) + 1;
      const response = await PokeApi.get(`/${id}`);

      setPokemonData({
        id: response.data.id.toString(),
        name: response.data.name.toUpperCase(),
        image: response.data.sprites.front_default,
        type: response.data.types,
        shiny: response.data.sprites.front_shiny,
      });
    } catch (error) {
      console.error("Error obteniendo Pokémon", error);
      setInputValue("No se encontro el pokemon")
    }
  };

  return (
    <ScrollView style={HomeScreenStyles.scrollView}>
      <View style={HomeScreenStyles.container}>
       
        <TextInput
          style={HomeScreenStyles.input}
          placeholder="Ingresa el ID o nombre"
          value={inputValue}
          onChangeText={(text) => setInputValue(text.replace(/[^0-9a-zA-Z]/g, ""))} 
        />

        <Button
          title="Buscar"
          onPress={() => setPokemonId(inputValue)}
          color="blue"
        />

        {pokemonData && <PokeCard Pokemon={pokemonData} />}

        <Pressable
          onPress={() => {
            const randomId = Math.floor(Math.random() * 1000) + 1;
            setPokemonId(`${randomId}`);
            setInputValue(`${randomId}`);
          }}
          style={HomeScreenStyles.pressable}
        >
          <Text style={HomeScreenStyles.title}>Pokémon Aleatorio</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreens;
