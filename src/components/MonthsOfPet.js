import { useState } from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';

const MonthsOfPet = (props) => {

const [disabled, setDisabled] = useState(true);
const [monthsOfPet, setLocalMonthsOfPet] = useState(null);

const _continue = () => {
    props.advance(4);
}  

const back = () => {
    props.advance(2);
}

const setMonthsOfPet = (monthsOfPet) => {
    setLocalMonthsOfPet(monthsOfPet);
    props.monthsOfPet(monthsOfPet);
    setDisabled(false);
}


  return (
    <Container>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <h2>Cuantos meses tiene {props.petName}?</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={6}>
              <h3 className={`${monthsOfPet === "2-4" ? "pet-selected" : ""}`} onClick={() => setMonthsOfPet("2-4")}>2 a 4 meses </h3>
            </Col>
            <Col md={6}>
            <h3 className={`${monthsOfPet === "4-6" ? "pet-selected" : ""}`} onClick={() => setMonthsOfPet("4-6")}>4 a 6 meses </h3>
            </Col>
            <Col md={6}>
            <h3 className={`${monthsOfPet === "6-8" ? "pet-selected" : ""}`} onClick={() => setMonthsOfPet("6-8")}>6 a 8 meses </h3>
            </Col>
            <Col md={6}>
            <h3 className={`${monthsOfPet === "8-12" ? "pet-selected" : ""}`} onClick={() => setMonthsOfPet("8-12")}>8 a 12 meses </h3>
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

export default MonthsOfPet;
