import React, { useCallback, useEffect, useState } from "react";
import PokeService from '../../services/Pokeservice';
import { useParams } from 'react-router-dom';
import Header from "../header/Header";
import Loader from '../loader/Loader'
import Notfound from "../notfound/Notfound";
import DetailsAbility from "./DetailsAbility";
import DetailsPoke from "./DetailsPoke";

const Details = () => {
  const [pokeinfo, setPokeinfo] = useState([]);
  const [loader, setLoader] = useState(true);
  const { method, name } = useParams();
  let pokeType = "";
  
  const getPokeInfo = useCallback(async () => {
    const PokeData = await PokeService.getPoke(null, method, name);
        setPokeinfo(PokeData.data);
        setLoader(false); 
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
      loader ? 
      <Loader />
      :
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
      </>
    }
    </>
  );
};

export default Details;
