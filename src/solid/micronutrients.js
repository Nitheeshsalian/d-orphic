import { Form, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import "./macro.css";
import { useState } from "react";
const ZN = 3000;
const FE = 2500;
const MN = 1000;
const CU = 1000;
const B = 500;
const MO = 100;

function Micronutrients() {
  const [vol, setVol] = useState(0);
  const [ppm, setPpm] = useState(0);
  const [zn, setZn] = useState(0);
  const [fe, setFe] = useState(0);
  const [mn, setMn] = useState(0);
  const [b, setB] = useState(0);
  const [cu, setCu] = useState(0);
  const [mo, setMo] = useState(0);
  const [micronutrients, setMicronutrients] = useState(0);

  const calculate = (event) => {
    event.preventDefault();
    const _micronutrients = (vol * ppm * 100) / ZN;
    const _z = (_micronutrients* ZN) / (vol * 100);
    const _fe = (_micronutrients* FE) / (vol * 100);
    const _mn = (_micronutrients* MN) / (vol * 100);
    const _cu = (_micronutrients* CU) / (vol * 100);
    const _b = (_micronutrients* B) / (vol * 100);
    const _mo = (_micronutrients* MO) / (vol * 100);
    setZn(_z)
    setFe(_fe)
    setMn(_mn)
    setB(_b)
    setMo(_mo)
    setCu(_cu)
    setMicronutrients(_micronutrients.toFixed(2));
    
}
  return (
    <div>
      <Form className="widget-card" onSubmit={calculate}>
        <h3>Calculations of Micronutrients</h3>
        <Row>
          <Col>
            <Form.Group controlId="">
              <Form.Label>Enter vol of nutrient solution in Litre</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter N"
                value={vol}
                onChange={(e) => setVol(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="">
              <Form.Label>
                Enter controlling ppm (say enter desired ppm of Zn)
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter N"
                value={ppm}
                onChange={(e) => setPpm(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ padding: 10 }}>
            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </Row>
      </Form>
      <Card style={{ marginTop: 30 }}>
        <Card.Header>Answers</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Add {micronutrients} grams of micronutrients for {ppm} ppm Zn</ListGroup.Item> 
            <ListGroup.Item>By adding {micronutrients} grams, overall micronutrients in working solution would be</ListGroup.Item> 
            <ListGroup.Item variant="primary">Zn {zn} ppm</ListGroup.Item>
            <ListGroup.Item variant="secondary">Fe {fe} ppm</ListGroup.Item>
            <ListGroup.Item variant="success">Mn {mn} ppm</ListGroup.Item>
            <ListGroup.Item variant="danger">B {b} ppm</ListGroup.Item>
            <ListGroup.Item variant="warning">Cu {cu} ppm</ListGroup.Item>
            <ListGroup.Item variant="info">Mo {mo} ppm</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Micronutrients;
