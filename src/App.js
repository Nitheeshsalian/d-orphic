import "./App.css";
import {
  Container,
  Row,
  Form,
  Col,
  ListGroup,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const [k, setK] = useState(0);
  const [mg, setMg] = useState(0);
  const [ca, setCa] = useState(0);
  const [vol, setVol] = useState(0);

  const [firstCalmg, setFirstCalmg] = useState(0);
  const [firsts, setFirsts] = useState(0);
  const [secondCalca, setSecondCalCa] = useState(0);
  const [secondn, setSecondN] = useState(0);

  const [thirdn, setThirdn] = useState(0);
  const [thirdk, setThirdk] = useState(0);

  const [fouthp, setFouthp] = useState(0);
  const [fouthk, setFouthk] = useState(0);

  const [fifthk, setFifthk] = useState(0);
  const [fifths, setFifths] = useState(0);

  const calculate = (event) => {
    event.preventDefault();
    console.log(n);
    const _firstCalcMg = (mg * vol * 100) / (9.8 * 1000);
    const _secondCalca = (ca * 100 * vol) / (18.8 * 1000);
    const _thirdn =
      ((n - (_secondCalca * 15.5 * 1000) / (100 * vol)) * 100 * vol) /
      (13 * 1000);
    const _forthp = (p * 100 * vol) / (22.69 * 1000);
    const _fifth =
      ((k -
        ((_thirdn * 37.3 * 1000) / (100 * vol) +
          (_forthp * 28.2 * 1000) / (100 * vol))) *
        100 *
        vol) /
      (41.5 * 1000);

    setFirstCalmg(_firstCalcMg.toFixed(2));
    setFirsts(((_firstCalcMg * 13 * 1000) / (100 * vol)).toFixed(2));

    setSecondCalCa(_secondCalca.toFixed(2));
    setSecondN(((_secondCalca * 15.5 * 1000) / (100 * vol)).toFixed(2));

    setThirdn(_thirdn.toFixed(2));
    setThirdk(((_thirdn * 37.3 * 1000) / (100 * vol)).toFixed(2));

    setFouthp(_forthp.toFixed(2));
    setFouthk(((_forthp * 28.2 * 1000) / (100 * vol)).toFixed(2));

    setFifthk(_fifth.toFixed(2));
    setFifths(((_fifth * 17 * 1000) / (100 * vol)).toFixed(2));
  };

  return (
    <Container>
      <Form onSubmit={calculate}>
        <h3>Insert Desired PPM of Macro Element Needed</h3>
        <Row>
          <Col>
            <Form.Group controlId="">
              <Form.Label>N</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter N"
                value={n}
                onChange={(e) => setN(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="">
              <Form.Label>P</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter P"
                value={p}
                onChange={(e) => setP(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="">
              <Form.Label>K</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter K"
                value={k}
                onChange={(e) => setK(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="">
              <Form.Label>Mg</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mg"
                value={mg}
                onChange={(e) => setMg(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="">
              <Form.Label>Ca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Ca"
                value={ca}
                onChange={(e) => setCa(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="">
              <Form.Label>V(Lit)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter V(lit)"
                value={vol}
                onChange={(e) => setVol(e.target.value)}
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

      <Card body style={{marginTop: 50}}>
        <div>1. First Calc for Mg (Ist Part) = {firstCalmg} gram</div>
        <div>You will get S = {firsts} ppm</div>
      </Card>

      <Card body>
        <div>2. Second Calc for Ca (Ist Part) = {secondCalca} gram</div>
        <div>You will get N = {secondn} ppm</div>
      </Card>

      <Card body>
        <div>3. Third Calc for N (Ist Part) ={thirdn} gram</div>
        <div>You will get K = {thirdk} ppm</div>
      </Card>

      <Card body>
        <div>4. Fourth Calc for P (Ist Part) ={fouthp} gram</div>
        <div>You will get K = {fouthk} ppm</div>
      </Card>

      <Card body>
        <div>5. Fifth Calc for K (Ist Part) ={fifthk} gram</div>
        <div>You will get S = {fifths} ppm</div>
      </Card>

      <Card style={{ marginTop: 30 }}>
        <Card.Header>Answers</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item variant="warning">
              Take {firstCalmg} gram MgSO4.7H2O (Epsom salt)
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              Take {secondCalca} gram Ca(NO3)2
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              Take {thirdk} gram KNO3
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              Take {fouthp} gram KH2PO4
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              Take {fifthk} gram K2SO4
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer style={{fontWeight: 'bold'}}>
          And Dissolve it in {vol} Liters water
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default App;
