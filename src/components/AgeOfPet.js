import { useState } from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';
import gatoPequenio from "../assets/gato pequenio -100.jpg";
import gatoAdulto from "../assets/gato adulto -100.jpg";
import perroPequenio from "../assets/Cachorro-100.jpg";
import perroAdulto from "../assets/perro adulto -100.jpg";

const AgeOfPet = (props) => {

const [disabled, setDisabled] = useState(true);
const [age, setLocalAge] = useState(null);

const _continue = () => {
  if(props.petSelected === "dog" && age === "cachorro") {
    props.advance(3.5);
  }
  else if(props.petSelected === "dog") {
    props.advance(2.5);
  }
  else if(props.petSelected === "cat" && age === "cachorro") {
    props.advance(3.5);
  }
  else{
    props.advance(3);
  }
  props.setBack(2);
}  

const back = () => {
  props.advance(props.back);
}

const setAge = (age) => {
    setLocalAge(age);
    props.age(age);
    setDisabled(false);
}


  return (
    <Container>
      {{
        "cat":<Container>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <h2>Que edad tiene {props.petName}?</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <Image className={`${age === "cachorro" ? "pet-selected" : ""}`} src={gatoPequenio} onClick={() => setAge("cachorro")} />
            </Col>
            <Col md={4}>
            <Image className={`${age === "adulto" ? "pet-selected" : ""}`} src={gatoAdulto} onClick={() => setAge("adulto")} />
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
        </Container>,
        "dog": <Container>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <h2>Que edad tiene {props.petName}?</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <Image className={`${age === "cachorro" ? "pet-selected" : ""}`} src={perroPequenio} onClick={() => setAge("cachorro")} />
              <p>Cachorro</p>
            </Col>
            <Col md={4}>
            <Image className={`${age === "adulto" ? "pet-selected" : ""}`} src={perroAdulto} onClick={() => setAge("adulto")} />
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
        </Container>,
      }[props.petSelected]}
    </Container>
  );
}

export default AgeOfPet;
