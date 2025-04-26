import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; 

export default function Contact() {
    const phoneNumber = '+201069490890';
    const message = 'مرحبًا، أود الاستفسار عن...'; 

    return (
        <Container className="my-5">
            <Row className="text-center">
                <Col>
                    <h2>تواصل معنا عبر واتساب</h2>
                    <p>نحن هنا دائمًا للإجابة على استفساراتك. اضغط على الزر أدناه للتواصل معنا مباشرة عبر واتساب.</p>
                    <Button
                        variant="success"
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        className="btn-whatsapp">
                        <FaWhatsapp /> تواصل الآن عبر واتساب
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
