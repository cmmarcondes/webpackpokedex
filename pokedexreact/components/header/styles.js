import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
display: flex;
padding: 10px;
flex-direction: ${props => props.detailpage ? 'row' : 'column'};
align-items: center;
justify-content: ${props => props.detailpage ? 'space-around' : 'center'};
background-color: #FF4242;
overflow: hidden;
width: 100%;
height: auto;
color: white;
`;

export const Input = styled.input`
padding: 20px;
margin: 20px;
width: 350px;
border-radius: 6px;
border: none;
font-family: sans-serif;
font-size: 24px;
font-weight:lighter;
outline: none;
&::placeholder{
    font-weight: lighter;
}
`;

export const Select = styled.select`
padding: 20px;
margin: 20px;
width: 150px;
border: none;
border-radius: 6px;
font-family: sans-serif;
font-size: 20px;
font-weight: lighter;
outline: none;
`;

export const Option = styled.option`
padding: 5px 0px;
font-family: sans-serif;
font-size: 20px;
`;

export const Text = styled.h3`
letter-spacing: 2px;
font-size: 26px;
font-weight: lighter;
`;

export const Button = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    font-weight: lighter;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    border: none;
    border-radius: 6px;
    &:hover {
        background-color: ${props=> props.paginate ? '#9448BC' : '#FF99C8' };
        border: none;
        color: white;
    }
background-color: #FF4242;
color:white;
`;