import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'



function Upgrades(props){
    return (
        <div>
            <h1>Upgrades</h1>
            {props.upgrades.map((item) => (
            <div>
                <Button>{item.name}</Button>
            </div>
        ))}
        </div> 
    );
}

export default Upgrades;