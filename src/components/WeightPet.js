import { useState } from "react";
import { Row, Col, Container, Button, Form, FormGroup, Image } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';

import perroMediano from "../assets/perro mediano -100.jpg";

const TypeOfPet = (props) => {

  const [disabled, setDisabled] = useState(true);
  const [unit, setUnit] = useState("kg");
  const [weight, setLocalWeight] = useState(null);
  const [dailyRation, setDailyRation] = useState(null);
  const [gramos, setGramos] = useState(300);

  const calculator = () => {
    if (props.petSelected === "cat") {
      if (props.age === "cachorro") {
        if (props.monthsOfPet === "2-4") setDailyRation(weight * 100)
        if (props.monthsOfPet === "4-6") setDailyRation(weight * 80)
        if (props.monthsOfPet === "6-8") setDailyRation(weight * 60)
        if (props.monthsOfPet === "8-12") setDailyRation(weight * 40)
      }
      else{
        if (props.activityLevel === "home") setDailyRation(weight * 40)
        if (props.activityLevel === "activity") setDailyRation(weight * 60)
      }
    }
    if (props.petSelected === "dog") {
      if (props.age === "adulto") {
        if (props.activityLevel === "home") setDailyRation(weight * 25)
        if (props.activityLevel === "activity") setDailyRation(weight * 30)
      }
      if (props.age === "mediano") {
        if (props.activityLevel === "home") setDailyRation(weight * 30)
        if (props.activityLevel === "activity") setDailyRation(weight * 40)
      }
      if (props.age === "pequenio") {
        if (props.activityLevel === "home") setDailyRation(weight * 30)
        if (props.activityLevel === "activity") setDailyRation(weight * 50)
      }
      if (props.age === "cachorro") {
        if (props.monthsOfPet === "2-4") setDailyRation(weight * 100)
        if (props.monthsOfPet === "4-6") setDailyRation(weight * 80)
        if (props.monthsOfPet === "6-8") setDailyRation(weight * 60)
        if (props.monthsOfPet === "8-12") setDailyRation(weight * 40)
      }
    }
  }
  const calculate = () => {
    calculator()
  }

  const back = () => {
    props.advance(props.back);
  }

  const changeUnit = (e) => {
    setUnit(e.target.value);
    setDailyRation(null);
  }

  const setWeight = (weight) => {
    setLocalWeight(weight);
    props.weight(weight)
    const length = weight.length;
    if (length > 0) setDisabled(false);
    else setDisabled(true);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2>El peso de {props.petName}</h2>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md={4}>
          <Row>
            <Col md={6}>
              <FormGroup >
                <Form.Control className="my-margin" type="number" onChange={(e) => { setWeight(e.target.value) }} placeholder="0" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => changeUnit(e)}>
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Button size="lg" onClick={back} variant="light" >
            <ArrowLeft className="my-icon" />
            Back
          </Button>
        </Col>
        <Col md={4}>
          <Button size="lg" disabled={disabled} onClick={calculate} variant="warning">Calcular</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2>{unit === "lb" ? dailyRation * 2.2 : dailyRation} {dailyRation ? unit : null}</h2>
          {{
            "cat": <p>Nuestros empaques de gato son de 300 gr. Te ayudamos a calcular cuánto necesita {props.petName}:</p>,
            "dog":
              <Container>
                <p>Nuestros empaques de perro son de 300 gr, 500 gr, 1 kg y bites. Te ayudamos a calcular cuántos empaques necesita {props.petName} en base a nuestra presentación de:</p>
                <h3>Escoge el empaque</h3>
                <Row className="justify-content-md-center">
                  <Col md={6}>
                    <h3 className={`${gramos === "300" ? "pet-selected" : ""}`} onClick={() => setGramos("300")}>300 gr</h3>
                  </Col>
                  <Col md={6}>
                    <h3 className={`${gramos === "500" ? "pet-selected" : ""}`} onClick={() => setGramos("500")}>500 gr </h3>
                  </Col>
                  <Col md={6}>
                    <h3 className={`${gramos === "1000" ? "pet-selected" : ""}`} onClick={() => setGramos("1000")}>1 kg </h3>
                  </Col>
                  <Col md={6}>
                    <h3 className={`${gramos === "750" ? "pet-selected" : ""}`} onClick={() => setGramos("750")}>bite </h3>
                  </Col>
                </Row>
                {
                  {
                    "300": <div>
                      <h5>Sabores</h5>
                      <Image src={perroMediano} />
                    </div>,
                    "500": <div>
                      <h5>Sabores 2</h5>
                      <Image src={perroMediano} />
                    </div>,
                  }[gramos]}
              </Container>
          }[props.petSelected]}
          <ul>
            <li>Semanal: = {Math.ceil(dailyRation * 7 / gramos)} empaques</li>
            <li>15 días: = {Math.ceil(dailyRation * 15 / gramos)} empaques</li>
            <li>Mensual: = {Math.ceil(dailyRation * 30 / gramos)} empaques</li>

          </ul>
          <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Haz tu pedido</a>
        </Col>
      </Row>
    </Container>
  );
}

export default TypeOfPet;
