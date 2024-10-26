import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Navbar() {
  return (
    <Container>
        <Row>
            <Col lg={4}>
                <a href="">
                    <img src="" alt="" />
                </a>
            </Col>
            <Col lg={6}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </Col>
            <Col lg={2}>
                <a href="">
                    <img src="" alt="" />
                </a>
            </Col>
        </Row>
    </Container>
  )
}
