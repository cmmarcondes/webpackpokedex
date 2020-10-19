import React from 'react';
import Header from '../header/Header'
import { Container } from '../details/styles';
import { Content } from '../notfound/styles';
const Loader = () => {
return(
    <div style={{width: '100%', position: 'fixed'}}>
    <Header notfoundpage />
    <Container>
    <Content>
    <b>Loading</b>
    </Content>
    </Container>    
    </div>
);
}

export default Loader;