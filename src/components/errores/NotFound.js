import React from 'react';
import './NotFound.css';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="pagina-no-encontrada">
        <Container>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <div className="text-center">
                <h1 className="display-1">404</h1>
                <p className="lead">Página no encontrada</p>
                <p>Lo sentimos, la página que estás buscando no existe o ha sido eliminada.</p>
                <a className="btn btn-primary" href="/">Volver a la página principal</a>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
}
export default NotFound;