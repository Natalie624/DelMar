import React from "react";
import { Row, Col } from "react-bootstrap"
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FooterStyle from "./footer.module.css";

const Footer = () => (
    <section className={FooterStyle.footerSection}>
        <Row>
            <Col xs={12} className={FooterStyle.identityCol}>
                <Logo />
                <h3 className={FooterStyle.footerTitle}>Del Mar Restaurant</h3>
            </Col>
        </Row>
        <Row className={FooterStyle.footerContentRow}>
            <Col lg={3} md={6} sm={6} xs={12}>
                <h4 className={FooterStyle.sectionTitle}>Contact Us</h4>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@delmarrestaurant.com</p>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
                <h4 className={FooterStyle.sectionTitle}>Restaurant Hours</h4>
                <p>Mon - Sat: 8 am to 12 am</p>
                <p>Sun: 10 am to 10 pm</p>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12} className={FooterStyle.mobileCol}>
                <h4 className={FooterStyle.sectionTitle}>Our Location</h4>
                <p>123 Restaurant Ave. NE</p>
                <p>Seattle, WA 98107</p>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12} className={FooterStyle.mobileCol} id={FooterStyle.centerIcons}>
                <h4 className={FooterStyle.sectionTitle}>Follow Us</h4>
                <a className={FooterStyle.footerLinks}  href="/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className={FooterStyle.footerIcons} icon={faInstagram} />
                </a>
                <a className={FooterStyle.footerLinks}  href="/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className={FooterStyle.footerIcons} icon={faTwitter} />
                </a>
            </Col>
        </Row>
        <Row>
            <Col xs={12} className={FooterStyle.copyrightCol}>
                <p className={FooterStyle.copyright}>Created by <a href="https://firststringdigital.com/" target="_blank"  rel="noopener noreferrer">First String Digital</a>, Copyright {(new Date().getFullYear())}, All Rights Reserved</p>
            </Col>
        </Row>
    </section>
)

export default Footer