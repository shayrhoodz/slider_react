import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const url = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}


export default App;




// function SaveFullName(props) {
//   return (
//     <div>
//       <h1> Мое имя {props.name}, фамилия - {props.surname} </h1>
//       <a href={props.link}> Ссылка на мой профиль </a>
//     </div>
//   )
// }
