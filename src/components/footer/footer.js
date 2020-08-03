import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Row, Col } from "react-bootstrap"
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FooterStyle from "./footer.module.css";

const Footer = () => (
    <StaticQuery query={graphql`
        query Footer {
            allContentfulDelMarFooter{
                nodes{
                  contactHeadline{
                    contactHeadline
                  }
                  contactInfoParagraph{
                    json
                  }
                  hoursHeadline{
                    hoursHeadline
                  }
                  hoursInfoParagraph{
                    json
                  }
                  locationHeadline{
                    locationHeadline
                  }
                  locationInformationParagraph{
                    json
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={FooterStyle.footerSection}>
        <Row>
            <Col xs={12} className={FooterStyle.identityCol}>
                <Logo />
                <h3 className={FooterStyle.footerTitle}>Del Mar Restaurant</h3>
            </Col>
        </Row>
        <Row className={FooterStyle.footerContentRow}>
            <Col lg={3} md={6} sm={6} xs={12}>
                <h4 className={FooterStyle.sectionTitle}>{data.allContentfulDelMarFooter.nodes[0].contactHeadline.contactHeadline}</h4>
                    {documentToReactComponents(data.allContentfulDelMarFooter.nodes[0].contactInfoParagraph.json)}
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
                <h4 className={FooterStyle.sectionTitle}>{data.allContentfulDelMarFooter.nodes[0].hoursHeadline.hoursHeadline}</h4>
                  {documentToReactComponents(data.allContentfulDelMarFooter.nodes[0].hoursInfoParagraph.json)}
            </Col>
            <Col lg={3} md={6} sm={6} xs={12} className={FooterStyle.mobileCol}>
                <h4 className={FooterStyle.sectionTitle}>{data.allContentfulDelMarFooter.nodes[0].locationHeadline.locationHeadline}</h4>
                {documentToReactComponents(data.allContentfulDelMarFooter.nodes[0].locationInformationParagraph.json)}
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
    )}
    />
)

export default Footer