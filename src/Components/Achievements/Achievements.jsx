// src/Components/Achievements/Achievements.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ahmed from '../../assets/ahmed.jpg'
import ali from '../../assets/ali.jpg';
import asad from '../../assets/asad.jpg'
import yamn from '../../assets/yamn.jpg'
import salah from '../../assets/salah.jpg'

const achievements = [
    { id: 1, name: 'أحمد محمود', img: ahmed, description: 'حفظ 10 أجزاء من القرآن الكريم' },
    { id: 2, name: 'علي ابراهيم', img: ali, description: 'حفظ القرآن كاملًا بتقدير ممتاز' },
    { id: 3, name: 'اسعد محمود', img: asad, description: 'المرتبة الأولى في مسابقة الحفظ' },
    { id: 3, name: 'يامن محمد', img: yamn, description: 'المرتبة الأولى في مسابقة الحفظ' },
    { id: 1, name: 'أحمد محمود', img: ahmed, description: 'حفظ 10 أجزاء من القرآن الكريم' },
    { id: 3, name: 'صلاح الدين', img: salah, description: 'المرتبة الأولى في مسابقة الحفظ' },
];

export default function Achievements() {
    return (
        <Container className="my-5 text-center">
            <h2 className="mb-4">إنجازات طلابنا</h2>
            <Row>
                {achievements.map((achieve) => (
                    <Col key={achieve.id} md={4} className="mb-4">
                        <Card className="h-100 shadow">
                            <Card.Img variant="top" src={achieve.img} alt={achieve.name} />
                            <Card.Body>
                                <Card.Title>{achieve.name}</Card.Title>
                                <Card.Text>{achieve.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
