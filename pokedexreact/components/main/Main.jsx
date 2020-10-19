import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import api from '../../Api'
import Box from '../box/Box';
import {Container} from './styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';
import Loader from '../loader/Loader';

const Rules = () => {
    const [pokeinfos, setPokeinfos] = useState([]);
    const [selectValue, setSelectValue] = useState('');
    const [inputPH, setInputPH] = useState('');
    const [loader, setLoader] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(100);
    let totalPages = [];
    const history = useHistory();

    const getPokemons = useCallback(async() => {
        await api.get(`pokemon?limit=${postsPerPage}&offset=${currentPage}/`).then((res)=>{
            setPokeinfos(res.data.results);
            setLoader(false)
        });
    }, [currentPage, postsPerPage]);

    useEffect(()=>{
        getPokemons();
    }, [getPokemons]);

    const getSelectValue = (e) => {
        if(e === 'name'){
                setSelectValue('pokemon')
                setInputPH(e);
        }else{
            setSelectValue(e);
            setInputPH(e);
        }
        
    }
    const getPage = (e) =>{
        if(e === '8'){
            setPostsPerPage(93)
            setCurrentPage(e*100);
        }else{
            setPostsPerPage(100);
            setCurrentPage(e*100);
        }
        window.scrollTo(0,0)
    }

    const getInputValue = (e) => {
        if(e){
            history.push(`${selectValue}/${e}`) 
        }else{
            getPokemons()
        }};

    const pokeControl = pokeinfos.map((infos, index)=>{
        return <Box key={infos.name} pokeinfos={infos} selectValue={selectValue} idImage={index+1+currentPage} />
    })

    return(
        <>
{
    loader ? <Loader /> : 
    <>
    <Container>
    <Header getSelectValue={getSelectValue} getInputValue={getInputValue} inputPlaceHolder={inputPH}/>
    {pokeControl}
    </Container>
    <Footer totalPages={totalPages} getPage={getPage} />
    </>
}
        
        </>
    );
}

export default Rules;