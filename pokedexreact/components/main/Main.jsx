import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import api from '../../Api'
import Box from '../box/Box';
import {Container} from './styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import debounce from 'lodash.debounce';
import { useHistory } from 'react-router-dom';

const Rules = () => {
    const [pokeinfos, setPokeinfos] = useState([]);
    const [selectValue, setSelectValue] = useState('');
    const [inputPH, setInputPH] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(100);
    let totalPages = [];
    const history = useHistory();

    const getPokemons = useCallback(async() => {
        await api.get(`pokemon?limit=${postsPerPage}&offset=${currentPage}/`).then((res)=>{
            setPokeinfos(res.data.results);
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
        setCurrentPage(e*100);
        window.scrollTo(0,0)
    }

    const getInputValue = debounce(async(e) => {
        if(e){
            history.push(`${selectValue}/${e}`) 
        }else{
            getPokemons()
        }    
        }, 1000);

    const pokeControl = pokeinfos.map((infos)=>{
        return <Box key={infos.name} pokeinfos={infos} selectValue={selectValue} />
    })

    return(
        <>
        <Container>
        <Header getSelectValue={getSelectValue} getInputValue={getInputValue} inputPlaceHolder={inputPH}/>
        {pokeControl}
        </Container>
        <Footer totalPages={totalPages} getPage={getPage} />
        </>
    );
}

export default Rules;