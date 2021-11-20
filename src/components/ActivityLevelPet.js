import { useState } from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';
import gatoEnCasa from "../assets/gato en casa -100.jpg";
import gatoEnActividad from "../assets/gato en actividad -100.jpg";
import perroEnCasa from "../assets/perro mediano -100.jpg";
import perroEnActividad from "../assets/perro menos de 2 hora de actividad -100.jpg";

const ActivityLevelPet = (props) => {

const [disabled, setDisabled] = useState(true);
const [activityLevel, setLocalActivityLevel] = useState(null);

const _continue = () => {
    props.advance(4);
}  

const back = () => {
    props.advance(2);
}

const setActivityLevel = (activityLevel) => {
    setLocalActivityLevel(activityLevel);
    props.activityLevel(activityLevel);
    setDisabled(false);
}


  return (
    <Container>
      {{
        "cat":<Container>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <h2>Que nivel de actividad {props.petName}?</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <Image className={`${activityLevel === "home" ? "pet-selected" : ""}`} src={gatoEnCasa} onClick={() => setActivityLevel("home")} />
            </Col>
            <Col md={4}>
            <Image className={`${activityLevel === "activity" ? "pet-selected" : ""}`} src={gatoEnActividad} onClick={() => setActivityLevel("activity")} />
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
              <h2>Que nivel de actividad {props.petName}?</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={4}>
              <Image className={`${activityLevel === "home" ? "pet-selected" : ""}`} src={perroEnCasa} onClick={() => setActivityLevel("home")} />
            </Col>
            <Col md={4}>
            <Image className={`${activityLevel === "activity" ? "pet-selected" : ""}`} src={perroEnActividad} onClick={() => setActivityLevel("activity")} />
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

export default ActivityLevelPet;
