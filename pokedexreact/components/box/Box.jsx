import React, { Fragment, useCallback, useEffect, useState } from "react";
import api from "../../Api";
import { BoxContainer, Text } from "./styles";

const Box = ({ pokeinfos, selectValue }) => {
  const [pokeinfo, setPokeinfo] = useState([]);
  let pokeType = "";
  const getPokeInfos = useCallback(async () => {
    await api.get(pokeinfos.url).then((res) => {
      setPokeinfo([res.data]);
    });
  }, [pokeinfos.url]);
  useEffect(() => {
    getPokeInfos();
  }, [getPokeInfos]);

  const pokeControl = pokeinfo.map((infos) => {
    return (
      <Fragment key={infos.id}>
        {infos.types !== undefined
          ? infos.types.map((type) => {
            (pokeType = infos.types[0].type.name)
          })
          : false}
        <Text>{infos.name}</Text>
        <img src={infos.sprites.front_default} alt="img" />
      </Fragment>
    );
  });
  return (
    <BoxContainer
      to={{ pathname: `/pokemon/${pokeinfos.name}` }}
      poketype={pokeType}
    >
      {pokeControl}
    </BoxContainer>
  );
};

export default Box;
