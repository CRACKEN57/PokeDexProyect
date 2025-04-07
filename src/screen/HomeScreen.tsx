import React, { useEffect, useState } from "react";
import { Alert, Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import PokeApi from "../api/PokeApi";
import PokeCard from "../components/PokeCard";
import { Pokemon, PokemonAbility } from '../types/Pokemon';
import HomeScreenStyles from "../styles/HomeScreen.styles";
import PokeAbility from "../api/PokeTypes";

const HomeScreens = ({ route }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [PokemonId, setPokemonId] = useState("");
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);


  useEffect(() => {
    if (PokemonId) {
      fetchPokemon();
    }
  }, [PokemonId]);
  const translateText = async (text: string, fromLang: string, toLang: string) => {
    try {
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: fromLang,
          target: toLang
        }),
      });
      
      const data = await response.json();
      return data.translatedText;
    } catch (error) {
      console.error("Translation error:", error);
      return text; // Devuelve el texto original si falla
    }
  };
  

  
  // console.log(translated);

  const fetchPokemon = async () => {
    try {
      const id = PokemonId || Math.floor(Math.random() * 1025) + 1;
      const response = await PokeApi.get(`/${id}`);

      const TypeResponse = await Promise.all(
        response.data.types.map(async (type: any) => {
          const response = await fetch(`${type.type.url}`);
          return response.json();
        })
      );


        // Uso:
      const translated = await translateText(`${response.data.abilities[0].ability.name}`, "en", "es");

      console.log(translated); // "Habilidad"

      setPokemonData({
        id: response.data.id.toString(),
        name: response.data.name.toUpperCase(),
        image: response.data.sprites.front_default,
        type: TypeResponse,
        ability: response.data.abilities,
        moves: response.data.moves,
        shiny: response.data.sprites.front_shiny,
      });

    } catch (error) {
      console.error("Error obteniendo Pokémon", error);
      Alert.alert("Eror", "No se pudo obtener el Pokémon. Intenta de nuevo.");
      setInputValue("1")
    }
  };

  return (

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

  );
};

export default HomeScreens;
