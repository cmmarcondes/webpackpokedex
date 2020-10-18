import React from 'react';
import {Container, Button} from './styles';

const Header = ({totalPages, getPage}) => {
    for(let i = 0; i <= 9; i++){
        totalPages.push(i)
    }
    const pagesControl = totalPages.map((page)=>{
        return <Button key={page} value={page} onClick={(e) => getPage(e.target.value)}>{page+1}</Button>
    })
    return(
        <Container>{pagesControl}</Container>
    );
}

export default Header;