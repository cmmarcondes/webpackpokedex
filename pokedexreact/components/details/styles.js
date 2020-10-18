import styled from 'styled-components';

export const Container = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 20px;
padding: 50px;
width:50%;
background-color: #FFA3AF;
border-radius: 8px;
box-shadow: 0px 8px 10px 0px gray;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

export const Content = styled.div`
font-size: 36px;
letter-spacing: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
text-shadow: 2px 2px 2px #FF595E;
color: white;
margin: 10px;
`;

export const ContentText = styled.h3`
display: flex;
justify-content:${props => props.percentage ? 'flex-end' : 'flex-start'};
font-size: 24px;
font-weight: lighter;
width: 50%;
border-bottom-left-radius: ${props => props.percentage ? "none" : "8px"};;
border-bottom-right-radius: ${props => props.percentage ? "none" : "8px"};;
background: ${props => props.percentage ? `linear-gradient(to right, #FF595E 0%,#FF595E ${props.percentage}%,#FFFFFF ${props.percentage}%)` : "white"};
color: ${props => props.percentage ? "black" : '#FF595E'};
margin:0;
padding-left: 20px;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 20px;
`;

export const Title = styled.b`
width: 50%;
background-color: #FF595E;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
color: white;
font-weight: lighter;
font-size: 26px;
font-family: sans-serif;
padding-left: 20px;
margin-top: 20px;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 20px;
`;
