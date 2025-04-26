import React from 'react'
import about from '../../assets/about.png';
import style from './About.module.css'
import { Button } from 'react-bootstrap'
export default function About() {
    return (
        <div className={style.aboutSection}>
            <div className="container text-center">
                <div className="row justify-content-center align-items-center" >
                    <div className="col-md-6 mx-auto">
                        <p>معلومات عنا</p>
                        <h1 className={style.h1}>ابدأ معنا رحلة التلاوة والحفظ والتعلم الان</h1>
                        <p className={style.p}>لنبحر في علوم القرآن الكريم من خلال منصة اليكترونية شيقة وممتعة لك ولاسرتك ونتابع سويا كل ما تعلمناه ونأكد على مراجعته من خلال نظام متابعة مدمج يذكرك بجداول الحفظ والمراجعة.</p>
                        <Button variant="primary" size="lg" className="mt-3">اكتشف اكثر</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={about} alt="Hero" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div >
    )
}
