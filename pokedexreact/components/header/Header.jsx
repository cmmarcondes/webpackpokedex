import React from 'react';
import {Navbar, Input, Select, Option, Text, Button} from './styles';

const Header = ({getSelectValue, getInputValue, inputPlaceHolder, detailsPage, name, notfoundpage}) => {

    return(
        <>
        {
            notfoundpage ? <Navbar detailpage>
                <Text>
                    Who is this pokemon?
                </Text>
                <Button to="/">Back</Button>
            </Navbar>
            :
            (
                detailsPage ?
        <Navbar detailpage>
            <Text>
            Welcome to <b>{name}'s</b> page, here you can see all his details
            </Text>
            <Button to="/">Back</Button>
        </Navbar>
        :
        <Navbar>
            <Text>which way do you wanna search your pokemon? </Text>
            <Select onChange={(e)=> getSelectValue(e.target.value)} >
            <Option value='' defaultValue></Option>
            <Option value={'name'}>name or id</Option>
            <Option value={'ability'}>ability</Option>
        </Select>
        {inputPlaceHolder !== "" ? ( inputPlaceHolder === 'ability' ? <Input placeholder={`Pokemon's ${inputPlaceHolder}`} onChange={(e) => getInputValue(e.target.value)} type="number" /> : <Input placeholder={`Pokemon's ${inputPlaceHolder}`} onChange={(e) => getInputValue(e.target.value)} /> ) : false}
        </Navbar>
            )
        }        
        </>
    );
}

export default Header;