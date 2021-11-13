import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Form,
  Container,
} from "react-bootstrap";

import calculator from "../helper/calculator";

class Gato extends Component {
  state = {
    selectorType: "cachorro",
    tamanio: "cachorro",
    months: "2-4",
    nivelActividad: "Solo en casa",
    peso: 0,
    result: null,
  };

  calculate() {
    this.setState({
      result: calculator.gato.racionDiaria(
        this.state.nivelActividad,
        this.state.peso
      ),
    });
  }

  render() {
    return (
      <Container>
        <Row className="my-row">
          <Col xs={4}>Nivel de actividad física</Col>
          <Col xs={8}>
            <Form.Select
              onChange={(e) =>
                this.setState({ nivelActividad: e.target.value })
              }
            >
              <option value="Solo en casa">Solo en casa</option>
              <option value="Casa y calle">Casa y calle</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="my-row">
          <Col xs={4}>Peso: </Col>
          <Col xs={8}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="0"
                type="number"
                onChange={(e) => this.setState({ peso: e.target.value })}
              />
              <InputGroup.Text id="basic-addon1" type="number">
                kilogramos
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        <Row></Row>
        <Row>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => this.calculate()}
          >
            Calcular racion diaria
          </Button>
        </Row>
        {this.state.result ? (
          <Row>
            <Col xs={12}>
              <div className="result">
                <h1> Ración diaria: {this.state.result}</h1>
              </div>
            </Col>
          </Row>
        ) : null}
      </Container>
    );
  }
}

export default Gato;
