import { Container, Row, Col } from "react-bootstrap";
import '../css/footer.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} FastLibery</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <p>Hecho con ❤️ y 🍔</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
