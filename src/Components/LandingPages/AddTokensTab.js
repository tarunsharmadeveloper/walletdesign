import { Tabs, TabPane } from 'antd';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Card } from 'react-bootstrap';
import qrCode from '../../assets/images/icons/qrCode.png';
import TokenList from '../../Components/LandingPages/TokenList';



function AddTokensTab() {
    
    function callback(key) {
        console.log(key);
    }

    return (
        <>
                <Row>
                    <Col md={12}>
                        
                    <Tabs className="buyActivityTabs addTokenTabs w-100" defaultActiveKey="1" onChange={callback} centered>
                                        <Tabs.TabPane tab="MANUAL INPUT" key="1">

                                            {/* Content Here */}
                                            <Row>
                                                <Col lg={12} className='mb-2'>
                                                    <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">TOKEN MINT ADDRESS</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="" value="" /></div></div>
                                                </Col>
                                                <Col lg={12} className='mb-2'>
                                                    <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">TOKEN NAME</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="" value="" /></div></div>
                                                </Col>
                                                <Col lg={12} className='mb-2'>
                                                    <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">TOKEN SYMBOL</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="" value="" /></div></div>
                                                </Col>
                                            </Row>
                                            
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab="POPULAR TOKEN" key="2">

                                            {/* Content Here */}
                                            <Row>
                                                <Col lg={12} className='mb-1'>
                                                    <Card className='bg-transparent border-0'>
                                                        <Card.Body className='py-0'>
                                                            <Row className='align-items-center text-center'>
                                                                <Col xs={12}>
                                                                    <span><svg width="175" height="130" viewBox="0 0 212 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M206.321 103.533C209.457 103.533 212 100.99 212 97.8537V33.5957C212 30.4593 209.457 27.9165 206.321 27.9165H46.1207C42.9843 27.9165 40.4415 30.4593 40.4415 33.5957V148.03C40.4415 155.936 34.0088 162.37 26.1018 162.37H25.6974C17.7912 162.369 11.3585 155.936 11.3585 148.03V11.6307H174.318C177.454 11.6307 179.997 9.08791 179.997 5.95146C179.997 2.815 177.454 0.272217 174.318 0.272217H5.67924C2.54279 0.272217 0 2.815 0 5.95146V148.03C0 162.2 11.5281 173.728 25.6982 173.728H26.1025H178.456C196.952 173.728 212.001 158.68 212.001 140.184C212.001 137.047 209.458 134.504 206.321 134.504C203.185 134.504 200.642 137.047 200.642 140.184C200.642 152.418 190.689 162.37 178.456 162.37H47.4171C50.1833 158.272 51.8 153.336 51.8 148.03V39.275H200.642V97.8537C200.642 100.99 203.184 103.533 206.321 103.533Z" fill="#EAEAEA"/>
                                                                    </svg></span>
                                                                    <h5 className='my-3 text-dark'>You do not have any NFT collectables yet.</h5>
                                                                </Col>
                                                                <Col xs={12}>
                                                                    <button className='btn btn-primary'>RECEIVE NFT</button>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            
                                        </Tabs.TabPane>
                                    </Tabs>
                    </Col>
                </Row>
        </>
    )
}

export default AddTokensTab
