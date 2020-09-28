import React, { useState, useEffect } from 'react';
import './App.css';
import Nathan from './Components/Nathan'
import AppStore from './Components/AppStore'
import Stats from './Components/Stats'
import { Row, Col, Container } from 'react-bootstrap'


function App() {
  const [count, setCount] = useState(0);
  const [ClickNum, setClickNum] = useState(1);
  const [Cps, setCps] = useState(0);
  const [actualCps, setActCps] = useState(1);


  function buyAThing(price, cpsIncrease) {
    setCount(count - price);
    setActCps(actualCps + cpsIncrease);
  }

  useEffect(() => {
    const inter = setInterval(() => {
      console.log(count);
      setCount(count + actualCps);
    }, 1000);
    return () => clearInterval(inter);
  }, [count]);

  useEffect(() => {
    document.title = `Nathan Clicker: ${count} Lines`;
  }
  );

  return (
    <div className="App">
      <div className="App-header">
        <Container fluid>
          <Row>
            <Col>
              <AppStore count={count} buyItem={(price, cpsIncrease) => buyAThing(price, cpsIncrease)}></AppStore>
            </Col>
            <Col>
              <Nathan clickEvent={() => setCount(count + ClickNum)} count={count} actualCps={actualCps}></Nathan>
            </Col>
            <Col>
              <Stats count={count} ></Stats>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;



