import React, {Fragment} from 'react';
import { Container, Content, Title, ContentText } from "./styles";

const DetailsPoke = ({pokeType, pokeinfo}) => {
    return(
        <Container pokeType={pokeType}>
        <Content>{pokeinfo.name}</Content>
        <Content>
          {pokeinfo.sprites === undefined ? (
            false
          ) : (
            <img src={pokeinfo.sprites.front_default} alt="img" />
          )}
        </Content>        
            {pokeinfo.stats === undefined
              ? false
              : pokeinfo.stats.map((stat) => {
                  return (
                    <ContentText key={stat.stat.name} percentage={stat.base_stat}>
                      {stat.stat.name}
                      <br />
                      </ContentText>
                  );
                })}
          
        <Title>Abilities </Title>
        {pokeinfo.abilities === undefined ? (
          false
        ) : (
          <ContentText>
            {pokeinfo.abilities.map((abilities) => {
              return (
                <Fragment key={abilities.ability.name}>
                  {abilities.ability.name}
                  <br />
                </ Fragment>
              );
            })}
          </ContentText>
        )}
        <Title>Type</Title>
        {pokeinfo.abilities === undefined ? (
          false
        ) : (
          <ContentText>
            {pokeinfo.types.map((type) => {
              return (
                <Fragment key={type.type.name}>
                  {type.type.name}
                  <br />
                </Fragment>
              );
            })}
          </ContentText>
        )}
        <Title>Profile </Title>
        <ContentText>
          Height: {pokeinfo.height} kg
          <br /> Weight: {pokeinfo.weight} cm
        </ContentText>
      </Container>
    );
}

export default DetailsPoke;