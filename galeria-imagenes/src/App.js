//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilo de Bootstrap
import { Col, Row, Container } from 'react-bootstrap';

import Header from './Header.jsx'; // Importando componente creado por nosotros
import CardImagen from './CardImagen.jsx';
import Footer from './Footer.jsx';
import Descripcion from './Descripcion.jsx';

function App() {
  return (
    <div className="App">



      <Header titulo="GALERIA DE IMAGENES CON REACT "></Header>
      <hr></hr>



      <Container>
        <Row>
          <Col>
            <CardImagen
              imagen='https://cdn.pixabay.com/photo/2016/10/25/13/43/stollen-1768907_1280.jpg'
              titulos='Pan de Pascua'
              descripcion='Comida tipica navideña'
            ></CardImagen>
          </Col>

          <Col>
            <CardImagen
              imagen='https://cdn.pixabay.com/photo/2021/12/09/22/17/table-setting-6859274_1280.jpg'
              titulos='Cristaleria'
              descripcion='Copas para un buen brindis'
            ></CardImagen>
          </Col>

          <Col>
            <CardImagen
              imagen='https://cdn.pixabay.com/photo/2017/11/17/17/44/cookie-2957985_1280.jpg'
              titulos='Postre navideño'
              descripcion='Ricas galletas con mucho amor :)'
            ></CardImagen>
          </Col>
        </Row>
      </Container>

      <hr></hr>
      <Footer texto='2022 M4U1® Todos los derechos reservados.'></Footer>

      <Descripcion></Descripcion>

    </div>
  );
}



export default App;
