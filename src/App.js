import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Perro from "./components/Perro";
import Gato from "./components/Gato";

function App() {
  return (
    <Container>
      <Tabs id="pets" className="mb-3">
        <Tab eventKey="pequenia" title="PERRO">
          <Perro />
        </Tab>
        <Tab eventKey="gato" title="GATO">
          <Gato />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
