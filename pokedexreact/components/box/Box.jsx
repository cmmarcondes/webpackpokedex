import React from "react";
import { BoxContainer, Text } from "./styles";

const Box = ({ pokeinfos, idImage }) => {
  const getParams = (method, name) => {
    {localStorage.setItem('method', method)}
      {localStorage.setItem('name', name)}
  }
  return (
    <BoxContainer
      to={{ pathname: `/pokemon/${pokeinfos.name}` }}
      onClick={() => getParams('pokemon', pokeinfos.name)}
    >
       <Text>{pokeinfos.name}</Text>
       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idImage}.png`} alt="img" width="100" height="100" />
    </BoxContainer>
  );
  }
export default Box;
