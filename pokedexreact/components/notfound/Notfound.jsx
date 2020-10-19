import React from 'react';
import { Container, Content } from './styles';

const Notfound = () => {

return(
    <Container>
        <Content>
        Oops, sorry but this pokemon/ability doesnt exist :(
        <br />
        <br />
        but dont worry, you just need to click "back" and check if you wrote it right and in lowercase.
        </Content>
    </Container>
);
}

export default Notfound;