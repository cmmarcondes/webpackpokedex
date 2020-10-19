import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import Header from "../header/Header";
import Notfound from "../notfound/Notfound";
import DetailsAbility from "./DetailsAbility";
import DetailsPoke from "./DetailsPoke";

const Details = () => {
  const [pokeinfo, setPokeinfo] = useState([]);
  const { method, name } = useParams();

  let pokeType = "";
  const getPokeInfo = useCallback(async () => {
    await api.get(`${method}/${name}`).then((res) => {
        setPokeinfo(res.data)
    });
  }, [name, method]);

  useEffect(() => {
    getPokeInfo();
  }, [getPokeInfo]);
  
  if (pokeinfo.types !== undefined) {
    pokeinfo.types.map((type) => {
      return (pokeType = type.type.name);
    });
  }
  return (
    <>
    {
      pokeinfo.name ? <Header detailsPage={true} name={pokeinfo.name} /> : <Header notfoundpage={true} />
    }
      
      {
        pokeinfo.name ? (
          method === "pokemon" ? (
            <DetailsPoke pokeType={pokeType} pokeinfo={pokeinfo} />
          ) : (
            <DetailsAbility abilityinfo={pokeinfo} />
          )
        ) : 
        <Notfound />
      }
      {}
    </>
  );
};

export default Details;
