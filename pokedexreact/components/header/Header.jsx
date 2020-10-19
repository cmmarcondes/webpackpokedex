import React, { useState } from "react";
import { Navbar, Input, Select, Option, Text, Button, SearchButton } from "./styles";

const Header = ({
  getSelectValue,
  getInputValue,
  inputPlaceHolder,
  detailsPage,
  name,
  notfoundpage,
}) => {
    const [inputValue, setInputValue] = useState(0);
    
  return (
    <>
      {notfoundpage ? (
        <Navbar detailpage>
          <Text>Who is this pokemon?</Text>
          <Button to="/" >Back</Button>
        </Navbar>
      ) : detailsPage ? (
        <Navbar detailpage>
          <Text>
            Welcome to <b>{name}'s</b> page, here you can see all his details
          </Text>
          <Button to="/" >Back</Button>
        </Navbar>
      ) : (
        <Navbar>
          <Text>which way do you wanna search your pokemon? </Text>
          <Select onChange={(e) => getSelectValue(e.target.value)}>
            <Option value="" defaultValue></Option>
            <Option value={"name"}>name or id</Option>
            <Option value={"ability"}>ability</Option>
          </Select>
          {inputPlaceHolder !== "" ? (
            inputPlaceHolder === "ability" ? (
                <>
              <Input
                placeholder={`Pokemon's ${inputPlaceHolder}`}
                onChange={(e) => setInputValue(e.target.value)}
                type="number"
              />
              <SearchButton onClick={()=> getInputValue(inputValue)}>Search</SearchButton>
              </>
            ) : (
                <>
              <Input
                placeholder={`Pokemon's ${inputPlaceHolder}`}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <SearchButton onClick={()=> getInputValue(inputValue)}>Search</SearchButton>
              </>
            )
          ) : (
            false
          )}
        </Navbar>
      )}
    </>
  );
};

export default Header;
