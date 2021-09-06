import React from "react";
import styled from "styled-components";
import axios from 'axios';
import './Newsletter.css'

const Container = styled.section`
  display: grid;
  align-items: center;
  background: #F2F2F2;
  height: 146px;
`;
const TitleNewsletter = styled.h1`
  font-size: 18px;
  text-align: center;
`;

const FormNewsletter = styled.form`
  display: flex;
  justify-content: space-between;
  width: 47.292%;
  margin: 0 auto;
`;

const InputNome = styled.input`
  background: #fff;
  width: 39%;
  height: 48px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  padding-left: 5px;
`;

const InputEmail = styled.input`
  background: #fff;
  width: 39%;
  height: 48px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  padding-left: 5px;
`;

const Submit = styled.button`
  background: #000;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  width: 20%;
  border: none;
  border-radius: 5px;
`;

class Newsletter extends React.Component {
    state = {
      name: '',
      email: '',
    }

    handleChangeName = event => {
      this.setState({name: event.target.value})
    }

    handleChangeEmail = event => {
      this.setState({email: event.target.value})
    }

    handleSubmit(event) {
      event.preventDefault();

      const name = {
        name: this.state.name
      }

      const email = {
        email: this.state.email
      }
      
      axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', { name, email })
        .then(res => {
          try {
            console.log(res);
            console.log(res.data);
            console.log("Deu boa");
            alert("Deu boa");
          } catch (err) {
            console.log("Deu erro")
          }
          
        })
    } 
 
    render() {
      return (
        <Container>
          <TitleNewsletter>Participe de nossas news com promoções e novidades!</TitleNewsletter>
          <FormNewsletter onSubmit={this.handleRegister}>
            <InputNome type="text" placeholder="Digite seu nome" 
            onChange={this.handleChangeName}/>
            <InputEmail type="email" placeholder="Digite seu email" 
            onChange={this.handleChangeEmail}/>
            <Submit type="submit">Eu quero!</Submit>
          </FormNewsletter>
        </Container>
      )
    }
}

export default Newsletter