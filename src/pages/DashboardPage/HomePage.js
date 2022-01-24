import React, { useState } from 'react';
import {  Row, Col, Card } from 'react-bootstrap';
import { Input, Select, Upload, message, Tabs  } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import HeaderWhite from '../../Components/LandingPages/HeaderWhite';
import Footer from '../../Components/LandingPages/Footer';
import DashboardMenu from '../../Components/LandingPages/DashboardMenu';
import TokenList from '../../Components/LandingPages/TokenList';
import DashboardMenuDrawer from '../../Components/LandingPages/DashboardMenuDrawer';


function HomePage() {

    function callback(key) {
        console.log(key);
    }

    return (
        <>
            <div className='PageView'>
                <HeaderWhite/>
                    <div className='createNewItems pt-5 p-lg-4 pt-lg-5 bg-white'>
                        <div id="page-content" className="container-fluid mainPage">
                            <Row className='justify-content-center'>
                                <Col xl={6}>
                                    <div className='walletAddress'>
                                        <div class="input-group mb-3">
                                        <span class="input-group-text inputPrepand" id="basic-addon3">Wallet Address</span>
                                        <input type="text" class="form-control text-dark border-end-0" id="walletAdd" aria-describedby="basic-addon3" placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting' />
                                            <span class="input-group-text inputAppend border-start-0">
                                                <a href='#'>
                                                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.9167 0H2.41667C1.0875 0 0 1.0875 0 2.41667V19.3333H2.41667V2.41667H16.9167V0ZM20.5417 4.83333H7.25C5.92083 4.83333 4.83333 5.92083 4.83333 7.25V24.1667C4.83333 25.4958 5.92083 26.5833 7.25 26.5833H20.5417C21.8708 26.5833 22.9583 25.4958 22.9583 24.1667V7.25C22.9583 5.92083 21.8708 4.83333 20.5417 4.83333ZM20.5417 24.1667H7.25V7.25H20.5417V24.1667Z" fill="#8D8FF0"/>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='justify-content-center my-3 mb-lg-4'>
                                <Col xl={7}>
                                    <div className='d-none d-lg-block'>
                                        <DashboardMenu />
                                    </div>
                                    <div className='d-lg-none d-xl-none d-xxl-none'>
                                        <DashboardMenuDrawer />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='justify-content-center align-items-center'>
                                <Col lg={6} className=''>
                                    <Tabs className="buyActivityTabs w-100" defaultActiveKey="1" onChange={callback} centered>
                                        <Tabs.TabPane tab="Coins / Tokens" key="1">

                                            {/* Content Here */}
                                            <Row>
                                                <Col lg={12} className='mb-3'>
                                                    <Card className='tokenCard'>
                                                        <Card.Body className='py-3'>
                                                            <Row className='align-items-center'>
                                                                <Col xs={12} md={3} lg={3}>
                                                                    <div style={{position:'relative'}}>
                                                                        <TokenList />
                                                                    </div>
                                                                </Col>
                                                                <Col xs={6} md={6} lg={6}>
                                                                    <div className='ps-lg-3' style={{position:'relative'}}>
                                                                        <p className='m-0 text-danger'><span><i class="fas fa-sort-up"></i></span> <span>13.00 %</span></p>
                                                                        
                                                                        <p className='m-0 text-success'><span><i class="fas fa-sort-down"></i></span> <span>13.00 %</span></p>
                                                                        <div class="vl-right d-none d-lg-block"></div>
                                                                        <div class="vl-left d-none d-lg-block"></div>
                                                                    </div>
                                                                </Col>
                                                                <Col xs={6} md={3} lg={3}>
                                                                    <div className='float-end text-lg-end' style={{position:'relative'}}>
                                                                        <h4 className='m-0 amount'>$89.67</h4>
                                                                        <p className='m-0 text-dark'>01.00 SOL</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={12} className='mb-3'>
                                                    <Card className='tokenCard'>
                                                        <Card.Body className='py-3'>
                                                            <Row className='align-items-center'>
                                                                <Col xs={12} md={3} lg={3}>
                                                                    <div style={{position:'relative'}}>
                                                                        <TokenList />
                                                                    </div>
                                                                </Col>
                                                                <Col xs={6} md={6} lg={6}>
                                                                    <div className='ps-lg-3' style={{position:'relative'}}>
                                                                        <p className='m-0 text-danger'><span><i class="fas fa-sort-up"></i></span> <span>13.00 %</span></p>
                                                                        
                                                                        <p className='m-0 text-success'><span><i class="fas fa-sort-down"></i></span> <span>13.00 %</span></p>
                                                                        <div class="vl-right d-none d-lg-block"></div>
                                                                        <div class="vl-left d-none d-lg-block"></div>
                                                                    </div>
                                                                </Col>
                                                                <Col xs={6} md={3} lg={3}>
                                                                    <div className='float-end text-lg-end' style={{position:'relative'}}>
                                                                        <h4 className='m-0 amount'>$89.67</h4>
                                                                        <p className='m-0 text-dark'>01.00 SOL</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab="NFT" key="2">

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
                        </div>
                    </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default HomePage
