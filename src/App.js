import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand className="mr-auto">Let's Shop</Navbar.Brand>
        <Cart></Cart>
      </Navbar>
      <ProductList></ProductList>
    </Container>
  );
}

export default App;
