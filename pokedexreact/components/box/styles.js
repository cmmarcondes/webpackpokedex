import { Link } from 'react-router-dom';
import styled from 'styled-components';
const types = {
    normal: '#F9FBB2',
    fighting: "red",
    flying: '#FFE19C',
    poison: '#4A1942',
    ground: '#56351E',
    rock: '#7D7461',
    bug: '#036D19',
    ghost: '#39304A',
    steel: '#50808E',
    fire: '#F26419',
    water: '#06AED5',
    grass: '#8AC926',
    eletric:'#FBAF00' ,
    psychic: '#FFD639',
    ice: '#14BDEB',
    dragon: '#FF595E',
    dark: '#2E1C2B',
    fairy: '#FFA3AF'
}
let colortype1 = '';

//background: linear-gradient(45deg, purple 50%, green 50%);
export const BoxContainer = styled(Link)`
    display: flex;
    width: 200px;
    height: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 8px 1px gray;
    background-color: pink;
    //background: ${props => Object.entries(types).map((e)=> props.poketype === e[0] ? colortype1 = e[1] : "white") ? colortype1 : 'pink'};
    border-radius: 8px;
    margin: 20px;
    padding: 10px;
    text-decoration: none;
    &:visited{
    text-decoration: none;
}
`;

export const Text = styled.h1`
text-decoration: none;
font-size: 24px;
font-weight: bolder;
font-family: Verdana, Geneva, Tahoma, sans-serif;
text-shadow: 2px 2px 5px blue;
color: white;
margin: 10px;
`;