import React, { useCallback, useEffect, useState } from "react";
import PokeService from "../../services/Pokeservice";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Loader from "../loader/Loader";
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
    setLoader(false);
    setPokeinfo(PokeData.data);
  }, [name, method]);

  useEffect(() => {
    getPokeInfo();
    setInterval(()=>{
      setLoader(false)
    }, 500)
  }, [getPokeInfo]);

  if (pokeinfo.types !== undefined) {
    pokeinfo.types.map((type) => {
      return (pokeType = type.type.name);
    });
  }
  return (
    <>
      {
        loader ? <Loader /> :
        <>
        {pokeinfo.name ? (
        <>
          <Header detailsPage={true} name={pokeinfo.name} />
          {method === "pokemon" ? (
            <DetailsPoke pokeType={pokeType} pokeinfo={pokeinfo} />
          ) : (
            <DetailsAbility abilityinfo={pokeinfo} />
          )}
        </>
      ) : (
        <>
          <Header notfoundpage={true} />
          <Notfound />
        </>
      )}
        </>
      }
    </>
  );
};

export default Details;
