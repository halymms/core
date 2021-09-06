import React from 'react'
import styled from 'styled-components';
import BuscaDesktop from './CampoBusca/BuscaDesktop';

import logoCorebiz from '../../assets/logo/logo-corebiz.png'

const Cabecalho = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  `;

const AccountLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #7a7a7a;
  & ::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBlVKBEYIwDHydgA2oG3QDu4G4gSOwAWzCCOgEugE6ATiBbIDJNXAVW23/7o+7fPt8kgJhGOKVOBFfxIaokIiK2BMLYkbUxFoMdayJkhTKo5WSMgqc4vxD51T5urj1HNRyOISRuEMEDMLxFWzbGSLBg6489RZ2e1/YIPxnTnUjPqR2kO8Rtr2/Rjwjjj7AtrmX+gV2CfP67wggkxQ86F5oHN2IPmsNArNioXXEUi5MjnnpnGfT2pcm9AizQF3JDz5SFUh4sQ46SPtbx31AOnij2jXieE+kY5S7i9FSSESO1ZtSsIM7RRryGZ6rd0EsdCLGkJdj5stvUz1CyqUE7vYAAAAASUVORK5CYII=);
    padding-right: 5px;
  };
`;

const MinicartLink = styled.a`
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBrZSxccJAEEW/ZQJnVgdWB6YEl0AJlGBndmQ7dOQSTOoIqACoAFEBRwWIkAj+cjti2TkY0OjPvLnTre7f7s1KALAkOx17aEFiMkJDZWYeyDNaUI5YYiPduec1KdGC5ohZ3co6c0YLNFN57xZeyJZ8I96ZlPlDxhp7J/9kRR7Ih+7bdrwzeSQDUqjZQGOfiO0hJn2NS6xLKl9apQFRUNOUCo2LpGXKLJFR4TaklOuh9dwbBQ3kZp7SE2KryNcgFZSdxEuBvJqM/tRQ5lMcszzcDXmT0TfkL+JFTvWljRpXOgZz2Im80ZDMcNvHW+F4X7UkXeluqb/uWsRfzPLM+uTSKUOz4cus98z6HFeoa7IozHpuMu7bDXsSX1opKYJSWAAAAABJRU5ErkJggg==);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11%;
`;

const Header = () => {
  return (
    <Cabecalho>
      <img src={logoCorebiz} alt="Logo" />
      <BuscaDesktop />
      <Container>
        <AccountLink href="/">
          Minha Conta
        </AccountLink>
        <MinicartLink href="/"> </MinicartLink>
      </Container>
    </Cabecalho>
  )
}

export default Header