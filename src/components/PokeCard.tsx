import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Pokemon } from '../types/Pokemon';
import PokeCardStyles from "../styles/PokeCard.styles";

interface Props {
  Pokemon: Pokemon;
}


const PokeCard = ({ Pokemon }: Props) => {
  return (
    <View style={PokeCardStyles.card}>
      <Text style={PokeCardStyles.name}>{Pokemon.name} #{Pokemon.id}</Text>

      <View style={PokeCardStyles.image}>
        {Pokemon.type.map((t, index) => (
          <Image
          key={index}
          source={{ uri: t.sprites["generation-ix"]["scarlet-violet"].name_icon }}
          style={PokeCardStyles.imageType}
          />
        ))}
      </View>

      <Image source={{ uri: Pokemon.image }} style={PokeCardStyles.image} />

      <Text style={PokeCardStyles.SecondaryText}>Version Shiny</Text>
      <Image source={{ uri: Pokemon.shiny }} style={PokeCardStyles.image} />

      <View style={PokeCardStyles.secondaryContainer}>
        <Text style={PokeCardStyles.name}>
          {`${Pokemon.ability.map((t) => t.ability.name).join(" ~ ")}`}
        </Text>
      </View>
    </View>
  );
};

export default PokeCard;

