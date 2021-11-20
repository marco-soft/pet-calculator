import { useState } from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';
import perroMediano from "../assets/perro mediano -100.jpg";
import perroGrande from "../assets/perro adulto -100.jpg";
import perroPequenio from "../assets/Cachorro-100.jpg";

const AgeOfPet = (props) => {

const [disabled, setDisabled] = useState(true);
const [height, setLocalHeight] = useState(null);

const _continue = () => {
  props.advance(3);
  props.setBack(2.5);
}  

const back = () => {
  props.advance(props.back);
}

const setHeight = (height) => {
    setLocalHeight(height);
    props.height(height);
    setDisabled(false);
}


  return (
    <Container>
 
        <Row className="justify-content-md-center">
            <Col md={4}>
              <h2>Que tamano de raza tiene {props.petName}?</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <Image className={`${height === "pequenio" ? "pet-selected" : ""}`} src={perroPequenio} onClick={() => setHeight("pequenio")} />
            </Col>
            <Col md={4}>
            <Image className={`${height === "mediano" ? "pet-selected" : ""}`} src={perroMediano} onClick={() => setHeight("mediano")} />
            </Col>
            <Col md={4}>
            <Image className={`${height === "adulto" ? "pet-selected" : ""}`} src={perroGrande} onClick={() => setHeight("adulto")} />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
      <Col md={4}>
        <Button size="lg" onClick={back} variant="light" >
          <ArrowLeft className="my-icon"/>
          Back
          </Button>
        </Col>
        <Col md={4}>
        <Button size="lg" disabled={disabled} onClick={_continue} variant="warning">Continue</Button>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AgeOfPet;
