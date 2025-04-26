import React from 'react';
import { Container, Button } from 'react-bootstrap';
import style from './HeroSection.module.css'; // Assuming you have a CSS file for styles
import heroImage from '../../assets/hero.png';


function HeroSection() {
    return (
        <div className={style.heroSection}>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center" >
                    <div className="col-md-6 mx-auto">
                        <p>مرحبًا بكم في  منصه قرآني</p>
                        <h1 className={style.h1}>اقرأ باسم ربك الذي خلق</h1>
                        <p className={style.p}>منصة قرآني هي منصة تعليمية تهدف إلى تعزيز فهم القرآن الكريم وتعليمه بطرق مبتكرة.</p>
                        <p className={style.p}>استمتع بتجربة فريدة في قراءة القرآن الكريم.</p>
                        <Button variant="primary" size="lg" className="mt-3">ابدأ الآن</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={heroImage} alt="Hero" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeroSection;
