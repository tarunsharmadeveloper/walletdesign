import { Collapse } from 'antd';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import LogoWhite from '../../assets/images/logo/logo_white.svg';
function Footer() {

    const { Panel } = Collapse;

    return (
        <>
        <footer className='footer ps-3 ps-md-0 pt-5 pb-4 bg-dark'>
            <Container>
                {/* Footer 1 */}
                <Row className='footer-1'>
                    <Col md={4} lg={3} className='pt-2'>
                        <h4>The Latest Updates</h4>
                        <div className="input-group mt-md-4 mt-lg-5 pe-3 mb-3">
                            <div className='w-100' style={{position:"relative"}}>
                            <input type="email" className="form-control searchbox bg-white" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon"  />
                            <button className="input-group-text search-icon" id="basic-addon">GO</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} lg={9}>
                        <div className='desktop-view d-none d-lg-block'>    
                            <Row>
                                <Col md={6} lg={3} className='pt-2'>
                                    <h4>About Us</h4>
                                    <div className='footer-menu mt-md-4 mt-lg-5'>
                                        <ul className=''>
                                            <li>About</li>
                                            <li>Press</li>
                                            <li>Jobs</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6} lg={3} className='pt-2'>
                                    <h4>Resources</h4>
                                    <div className='footer-menu mt-md-4 mt-lg-5'>
                                        <ul className=''>
                                            <li>About</li>
                                            <li>Press</li>
                                            <li>Jobs</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6} lg={3} className='pt-2'>
                                    <h4>Partnerships</h4>
                                    <div className='footer-menu mt-md-4 mt-lg-5'>
                                        <ul className=''>
                                            <li>About</li>
                                            <li>Press</li>
                                            <li>Jobs</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6} lg={3} className='pt-2'>
                                    <h4>Support</h4>
                                    <div className='footer-menu mt-md-4 mt-lg-5'>
                                        <ul className=''>
                                            <li>About</li>
                                            <li>Press</li>
                                            <li>Jobs</li>
                                            <li>Contact Us</li>
                                            <li>Langauge: <span className='font-weight-light'>English</span></li>
                                        </ul>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='mobTab-view d-lg-none d-xl-none d-xxl-none'>    
                            <Row>
                                <Col md={6} lg={3} className='pt-2'>
                                    <Collapse ghost>
                                        <Panel header={<h4>About Us</h4>} key="1">
                                            <div className='footer-menu ps-3'>
                                                <ul className=''>
                                                    <li>About</li>
                                                    <li>Press</li>
                                                    <li>Jobs</li>
                                                    <li>Contact Us</li>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </Col>
                                <Col md={6} lg={3} className='pt-2'>
                                    <Collapse  ghost>
                                        <Panel header={<h4>Resources</h4>} key="1">
                                            <div className='footer-menu ps-3'>
                                                <ul className=''>
                                                    <li>About</li>
                                                    <li>Press</li>
                                                    <li>Jobs</li>
                                                    <li>Contact Us</li>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </Col>
                                <Col md={6} lg={3} className='pt-2'>
                                    <Collapse  ghost>
                                        <Panel header={<h4>Partnerships</h4>} key="1">
                                            <div className='footer-menu ps-3'>
                                                <ul className=''>
                                                    <li>About</li>
                                                    <li>Press</li>
                                                    <li>Jobs</li>
                                                    <li>Contact Us</li>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </Col>
                                <Col md={6} lg={3} className='pt-2'>
                                    <Collapse ghost>
                                        <Panel header={<h4>Support</h4>} key="1">
                                            <div className='footer-menu ps-3'>
                                                <ul className=''>
                                                    <li>About</li>
                                                    <li>Press</li>
                                                    <li>Jobs</li>
                                                    <li>Contact Us</li>
                                                    <li>Langauge: <span className='font-weight-light'>English</span></li>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                {/* Footer 2 */}
                <Row className='footer-2 mt-2'>
                    <Col lg={11} className='d-none d-md-block'>
                        <Row className=''>
                            <Col lg={3} className='pt-2 text-lg-end'>
                                <img src={LogoWhite} alt='Footer Logo' className='img-fluid' />
                            </Col>
                            <Col lg={9} className='pt-2'>
                                <div className='footer-menu'>
                                    <ul className='ps-lg-3'>
                                        <li>Terms of Use</li>
                                        <li>Privacy Policy</li>
                                        <li>Security</li>
                                        <li>Conditions of Use</li>
                                        <li>Do not sell my personal information</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className=' d-md-none d-lg-none d-xl-none d-xxl-none'>
                        <Row className=''>
                            <div className='bottom-footer'>
                            <Col lg={3} className='pt-2 pb-3'>
                                    <img src={LogoWhite} alt='Footer Logo' className='img-fluid' />
                                </Col>
                                <Col xs={6} lg={9} className='pt-2'>
                                    <li>Terms of Use</li>
                                </Col>
                                <Col xs={6} lg={9} className='pt-2'>
                                    <li>Privacy Policy</li>
                                </Col>
                                <Col xs={6} lg={9} className='pt-2'>
                                    <li>Security</li>
                                </Col>
                                <Col xs={6} lg={9} className='pt-2'>
                                    <li>Conditions of Use</li>
                                </Col>
                                <Col xs={12} lg={9} className='pt-2'>
                                    <li>Do not sell my personal information</li>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer
