import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <>
    <footer className="footer-bg py-5">
      <Container>
        <Row>
          <Col md={4} xs={12} className="mb-4">
            <Image src="/src/assets/4741565.jpg" alt="Tienda de Comidas" fluid />
            <p className="mt-3">Breve descripción de la tienda de comidas.</p>
          </Col>
          <Col md={4} xs={12} className="mb-4">
            <h5>Horarios de Delivery</h5>
            <p>Lunes a Viernes: 10:00 AM - 8:00 PM</p>
            <p>Sábados y Domingos: 11:00 AM - 7:00 PM</p>
          </Col>
          <Col md={4} xs={12} className="mb-4">
            <h5>Contacto</h5>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@tiendacomidas.com</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-4">
            <h5>Suscríbete a nuestro Newsletter</h5>
            <Form>
              <Form.Row>
                <Col xs={12} md={8} className="mb-2">
                  <Form.Control type="email" placeholder="Ingresa tu email" />
                </Col>
                <Col xs={12} md={4}>
                  <Button block variant="primary" type="submit">Suscribirme</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}
export default Footer;