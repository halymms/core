import React from 'react'
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 39.36%;
  border-bottom: 1px solid;
  display: flex;
  @media (max-width: 1040px) {
    display: none;
  }
`;

const SearchButton = styled.a`
    background: none;
    border: 0;
    width: 4%;
    margin-bottom: 1%;
    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBrZPREYMgEEQ3sQFLuBIsIZ3EEuxA0oEdJOkgHWgHlmAJ/ObPHJNjQILAONmZN37cuqwIwFY10zMLswozc2cIhboyWl7WEjB6gYYuF9J6AUqahfMlF0ZiMiEN9kVeY4oZBhTWhms+xIazDGuUSQs/sn+mVGNs4TP+KLvRpZ9m/QgbPSWkRV7GQ8wrNiS4DaRECMGdpV1fJ4YF8WYXbK9Nj4SUZzTtRkFje02Kwoh5BKubIHMAm2CxbJhVjfifVLGwKhH0FkJNzAnffYP3PCzltVorHNcE1+z2AQ//U7U31xVLAAAAAElFTkSuQmCC");
`;

const Input = styled.input`
  width: 100%;
  border-top: 0;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
`;

const BuscaDesktop = () => {
  return (
    <SearchContainer>
      <Input type="text" placeholder="O que você está procurando"/>
      <SearchButton href="/"/> 
    </SearchContainer>
  )
}

export default BuscaDesktop