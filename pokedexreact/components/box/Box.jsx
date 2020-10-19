import React from "react";
import { BoxContainer, Text } from "./styles";

const Box = ({ pokeinfos, idImage }) => {
  return (
    <BoxContainer
      to={{ pathname: `/pokemon/${pokeinfos.name}` }}
    >
       <Text>{pokeinfos.name}</Text>
       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idImage}.png`} alt="img" width="100" height="100" />
    </BoxContainer>
  );
  }
export default Box;
