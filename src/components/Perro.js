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

class Perro extends Component {
  state = {
    selectorType: "cachorro",
    tamanio: "cachorro",
    months: "2-4",
    nivelActividad: "Sedentario",
    peso: 0,
    result: null,
  };
  onChangeTamanio(event) {
    const value = event.target.value;
    this.setState({ tamanio: value });
    switch (value) {
      case "cachorro":
        this.setState({ selectorType: "cachorro" });
        break;
      case "pequenia":
        this.setState({ selectorType: "pequenia" });
        break;
      case "grande":
        this.setState({ selectorType: "grande" });
        break;
      default:
        break;
    }
  }

  calculate() {
    switch (this.state.tamanio) {
      case "cachorro":
        this.setState({
          result: calculator.cachorro.racionDiaria(
            this.state.months,
            this.state.peso
          ),
        });
        break;
      case "pequenia":
        this.setState({
          result: calculator.pequenia.racionDiaria(
            this.state.nivelActividad,
            this.state.peso
          ),
        });
        break;
      case "grande":
        this.setState({
          result: calculator.mediana.racionDiaria(
            this.state.nivelActividad,
            this.state.peso
          ),
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Container>
        <Row className="my-row">
          <Col xs={4}>Tamaño</Col>
          <Col xs={8}>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => this.onChangeTamanio(e)}
            >
              <option value="cachorro">Cachorro</option>
              <option value="pequenia">Raza pequeña</option>
              <option value="grande">Raza grande</option>
            </Form.Select>
          </Col>
        </Row>
        {
          {
            cachorro: (
              <Row className="my-row">
                <Col xs={4}>Meses de vida</Col>
                <Col xs={8}>
                  <Form.Select
                    onChange={(e) => this.setState({ months: e.target.value })}
                  >
                    <option value="2-4">2 - 4</option>
                    <option value="4-6">4 - 6</option>
                    <option value="6-8">6 - 8</option>
                    <option value="8-12">8 - 12</option>
                  </Form.Select>
                </Col>
              </Row>
            ),
            pequenia: (
              <Row className="my-row">
                <Col xs={4}>Nivel de actividad física</Col>
                <Col xs={8}>
                  <Form.Select
                    onChange={(e) =>
                      this.setState({ nivelActividad: e.target.value })
                    }
                  >
                    <option value="Sedentario">Sedentario</option>
                    <option value="Normal">Normal</option>
                    <option value="Activo">Activo</option>
                  </Form.Select>
                </Col>
              </Row>
            ),
            grande: (
              <Row className="my-row">
                <Col xs={4}>Nivel de actividad física</Col>
                <Col xs={8}>
                  <Form.Select
                    onChange={(e) =>
                      this.setState({ nivelActividad: e.target.value })
                    }
                  >
                    <option value="Normal">Normal</option>
                    <option value="Activo">Activo</option>
                  </Form.Select>
                </Col>
              </Row>
            ),
          }[this.state.selectorType]
        }

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

export default Perro;
