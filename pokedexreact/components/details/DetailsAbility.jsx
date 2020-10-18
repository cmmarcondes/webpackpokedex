import React, { Fragment } from 'react';
import { Container, Content, Title, ContentText } from "./styles";

const DetailsAbility = ({abilityinfo}) => {
    console.log(abilityinfo)
    return(
        <Container>
            <Content>{abilityinfo.name}</Content>
            <Title>Effect</Title>
            <ContentText>
                {
                    abilityinfo.effect_entries !== undefined ? 
                    <ContentText>
                        {
                            abilityinfo.effect_entries.map((effect)=>{
                                if(effect.language.name === 'en'){
                                    return effect.short_effect
                                }
                                
                            })
                        }
                    </ContentText>
                    :
                    false
                }
            </ContentText>
            <Title>Pokemons</Title>
            {
                abilityinfo.pokemon !== undefined ?
                <ContentText>
                    {
                        abilityinfo.pokemon.map((poke)=>{
                            return <Fragment key={poke.pokemon.name}>{poke.pokemon.name} <br /></Fragment>
                        })
                    }
                </ContentText>
                :
                false
            }
        </Container>
    );
}

export default DetailsAbility;