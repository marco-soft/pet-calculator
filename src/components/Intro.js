import { Row, Col, Container, Button } from "react-bootstrap";

const Intro = (props) => {
const getStarted = () => {
    props.advance(1);
}  
  return (
    <Container>
      <Row className="justify-content-md-center">
          <Col md={6}>
            <Button size="lg" onClick={getStarted} variant="warning">Empecemos</Button>
          </Col>
      </Row>
    </Container>
  );
}

export default Intro;
