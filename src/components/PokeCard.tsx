import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../types/Pokemon";
import PokeCardStyles from "../styles/PokeCard.styles";

interface Props {
  Pokemon: Pokemon;
}

const PokeCard = ({ Pokemon }: Props) => {
  return (
    <View style={PokeCardStyles.card}>
      <Text style={PokeCardStyles.name}>{Pokemon.name} #{Pokemon.id}</Text>

      <Text style={PokeCardStyles.Text}>
       {` Tipo: ${Pokemon.type.map((t) => t.type.name).join("-")}`}
      </Text>

      <Image source={{ uri: Pokemon.image }} style={PokeCardStyles.image} />

      <Text style={PokeCardStyles.SecondaryText}>Version Shiny</Text>
      <Image source={{ uri: Pokemon.shiny }} style={PokeCardStyles.image} />

    </View>
  );
};

export default PokeCard;

