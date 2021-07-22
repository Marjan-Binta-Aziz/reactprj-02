import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/main.css';
import {Container,Row, Col,} from 'react-bootstrap'
export default function Header() {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col md={12}>
                    <ul className='menu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>                   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
