import React from 'react';
import { FaGooglePlusG, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import styles from './Footer.module.css'; // استيراد CSS Module
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h2 className={styles.footerTitle}><img src={logo} alt="" /></h2>
                    <p>منصة قرآني هي منصة تعليمية تهدف إلى تعزيز فهم القرآن الكريم وتعليمه بطرق مبتكرة.</p>
                    {/* <p>تقدم المنصة مجموعة متنوعة من الموارد التعليمية، بما في ذلك الدروس، والاختبارات، والمقالات، والكتب الإلكترونية.</p> */}
                    <p>تسعى المنصة إلى توفير بيئة تعليمية شاملة وممتعة للمتعلمين من جميع الأعمار.</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.division}></div>
                <p>© 2025 قرآني.   كل الحقوق محفوظة </p>
            </div>
        </footer>
    );
};

export default Footer;