import { useState } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import styled from 'styled-components'

import { Routes, Route, Link } from 'react-router-dom'
import data from './data';


let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`;

function App(){
  let [shoes, setShoes]=useState(data) 

  return (
    <div>
      <YellowBtn>안녕</YellowBtn>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' />
      <div className="container">
        <div className="row">
          {shoes.map((a,i) => {
            return(
            <Card shoes={shoes[i]}/>)
          //   <div className="col-md-4">
          //   <img src={shoes[i].img} width="80%" />
          //   <h4>{shoes[i].title}</h4>
          //   <p>{shoes[i].content}</p>
          // </div>
            })
          }
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 

    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/" element={ <div>메인페이지에서 보여줄거</div> } /> 
    </Routes>
    
    <Link to="/">홈 </Link>
    <Link to="/detail">상세페이지</Link>

    </div>

  )
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={props.shoes.img} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
    )
}


export default App;
