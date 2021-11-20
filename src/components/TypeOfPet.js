import { useState } from "react";
import { Row, Col, Image, Container, Button, Form, FormGroup } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';
import gato from "../assets/gato-100.jpg";
import perro from "../assets/Perro -100.jpg"

const TypeOfPet = (props) => {

const [disabled, setDisabled] = useState(true);
const [petSelected, setPetSelected] = useState(null);
const [petName, setLocalPetName] = useState(null);

const _continue = () => {
  props.advance(2);
  props.setBack(0)
}  

const back = () => {
    props.advance(props.back);
}

const setPetType = (type) => {
    setPetSelected(type)
    props.petSelected(type)
    const length = petName;
    if (length ) setDisabled(false);
    else setDisabled(true);
}

const setPetName = (name) => {
  setLocalPetName(name);
  props.petName(name)
  const length = name.length;
  if (length > 0 && petSelected ) setDisabled(false);
  else setDisabled(true);
}

  return (
    <Container>
      <Row className="justify-content-md-center">
          <Col md={12}>
            <h2>Tienes un perro o gato?</h2>
            <p>Si tienes ambos empecemos con uno.</p>
          </Col>
      </Row>
      <Row className="justify-content-md-center">
          <Col md={4}>
            <Image className={`${petSelected === "cat" ? "pet-selected" : ""}`} src={gato} onClick={() => setPetType("cat")} fluid/>
          </Col>
          <Col md={4}>
          <Image className={`${petSelected === "dog" ? "pet-selected" : ""}`} src={perro} onClick={() => setPetType("dog")} fluid/>
          </Col>
      </Row>
      <Row className="justify-content-md-center">
          <Col md={4}>
            <FormGroup >
              <Form.Control className="my-margin" type="text" onChange={(e)=>{setPetName(e.target.value)}} placeholder="El nombre de tu mascota"/>
            </FormGroup>
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

export default TypeOfPet;
