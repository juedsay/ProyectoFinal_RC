import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';
import '../css/footer.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Delivery Fast</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <p>Hecho con ❤️ y 🍔</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
