import "./App.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MacroElement from "./solid/macroElement";
import Micronutrients from './solid/micronutrients'
import { useState } from "react";

function App() {
  const [macroElement, setMacroElement] = useState(true);

  const handleClick = (value) => {
    setMacroElement(value);
  };

  return (
    <Container
      fluid
      style={{ minHeight: "100vh", backgroundColor: "#adb5bd4a" }}
    >
      {/* <MacroElement /> */}
      <Row>
        <Col className="flexcenter">
          <div className="widget">
            <Button
              size="sm"
              className="rounded-pill btn mr10"
              color="primary"
              onClick={()=>handleClick(true)}
            >
              Macro Element
            </Button>
            <Button
              size="sm"
              className="rounded-pill  btn"
              variant="outline-dark"
              onClick={()=>handleClick(false)}
            >
              Micronutrients
            </Button>
          </div>
        </Col>
      </Row>
      <Row>{macroElement ? <MacroElement /> : <Micronutrients />}</Row>
    </Container>
  );
}

export default App;
