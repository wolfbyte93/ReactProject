import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Nathan from './Components/Nathan'
import AppStore from './Components/AppStore'
import Stats from './Components/Stats'
import { Row, Col, Container } from 'react-bootstrap'
import dict from './items.json'

const refreshRate = 100;

function App() {
  const [count, setCount] = useState(0);
  const [ClickNum, setClickNum] = useState(1);
  const [Cps, setCps] = useState(0);
  const [actualCps, setActCps] = useState(1);


  function buyAThing(price, cpsIncrease, itemId) {
    setCount(count - price);
    setActCps(actualCps + cpsIncrease);
    dict[itemId].amount += 1;
    console.log(dict);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count => count + (actualCps * (refreshRate / 1000)));
    }, refreshRate);
    
    return () => clearTimeout(timeout);
  }, [count]);
  
  const roundedCount = Math.round(count);
  document.title = `Nathan Clicker: ${roundedCount} Lines`;

  return (
    <div className="App">
      <div className="App-header">
        <Container fluid>
          <Row>
            <Col>
              <AppStore count={count} buyItem={(price, cpsIncrease, itemId) => buyAThing(price, cpsIncrease, itemId)} dict={dict}></AppStore>
            </Col>
            <Col>
              <Nathan clickEvent={() => setCount(count => count + ClickNum)} roundedCount={roundedCount} count={count} actualCps={actualCps}></Nathan>
            </Col>
            <Col>
              <Stats count={count} dict={dict}></Stats>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;



