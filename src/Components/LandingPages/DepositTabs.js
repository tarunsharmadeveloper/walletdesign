import { Tabs, TabPane } from 'antd';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import qrCode from '../../assets/images/icons/qrCode.png';
import TokenList from '../../Components/LandingPages/TokenList';



function DepositTabs() {
    function callback(key) {
        console.log(key);
    }
    return (
        <>  
            
                <h5 className='m-0 text-dark fw-bolder'>Select Chain</h5>
              <Tabs className="depositTabs mt-0" defaultActiveKey="0" onChange={callback}>
                <Tabs.TabPane tab={
                    <span>
                        SOL
                    </span>
                } key="1">

                    <Row className='justify-content-center'>
                        <Col xs={6} md={6} >
                            <TokenList />
                        </Col>
                        <Col xs={6} md={6} >
                            <div className='float-end text-end'>
                                <h5 className='m-0 amount text-warning fw-bold'>89.67</h5>
                                <p className='m-0 text-dark'>Available</p>
                            </div>
                        </Col>
                        <Col xs={6} md={5} >
                            <div className='text-center'>
                                <img src={qrCode} className='img-fluid p-2' />
                                <p className='m-0 text-dark fw-bolder'>Save QR Code </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center px-2'>
                        <Col xs={7} md={7}>
                                <h5 className='m-0 text-dark'>Address</h5>
                                <p className='m-0 text-dark'>hhfkryixfjotobnndggejmeoaqhgdpndhgghjj</p>
                        </Col>
                        <Col xs={5} md={5}>
                                <button className='btn btn-outline-primary py-1 float-end'>Copy</button>
                        </Col>
                        <Col xs={12} md={12}>
                                <p className='mt-3 mb-0 fw-bold text-warning'><span><svg width="20" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4584" cy="19.8781" r="18.5404" stroke="black"/><path d="M20.2949 25.5687C20.5962 25.5687 20.8545 25.6763 21.0697 25.8915C21.285 26.1068 21.3926 26.3722 21.3926 26.6879C21.3926 27.0036 21.285 27.2619 21.0697 27.4628C20.8545 27.678 20.5962 27.7856 20.2949 27.7856C19.9935 27.7856 19.7352 27.678 19.52 27.4628C19.3048 27.2619 19.1971 27.0036 19.1971 26.6879C19.1971 26.3722 19.3048 26.1068 19.52 25.8915C19.7352 25.6763 19.9935 25.5687 20.2949 25.5687ZM19.5415 23.3517L19.5415 11.5996L21.0482 11.5996L21.0482 23.3517L19.5415 23.3517Z" fill="black"/></svg></span> Please don’t deposit any other coins into this address</p>
                        </Col>
                    </Row>

                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <span>
                        EHT
                    </span>
                } key="2">

                    {/* Content Here */}
                    <Row className='justify-content-center'>
                        <Col xs={6} md={6} >
                            <TokenList />
                        </Col>
                        <Col xs={6} md={6} >
                            <div className='float-end text-end'>
                                <h5 className='m-0 amount text-warning fw-bold'>89.67</h5>
                                <p className='m-0 text-dark'>Available</p>
                            </div>
                        </Col>
                        <Col xs={6} md={5} >
                            <div className='text-center'>
                                <img src={qrCode} className='img-fluid p-2' />
                                <p className='m-0 text-dark fw-bolder'>Save QR Code </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center px-2'>
                        <Col xs={7} md={7}>
                                <h5 className='m-0 text-dark'>Address</h5>
                                <p className='m-0 text-dark'>hhfkryixfjotobnndggejmeoaqhgdpndhgghjj</p>
                        </Col>
                        <Col xs={5} md={5}>
                                <button className='btn btn-outline-primary py-1 float-end'>Copy</button>
                        </Col>
                        <Col xs={12} md={12}>
                                <p className='mt-3 mb-0 fw-bold text-warning'><span><svg width="20" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4584" cy="19.8781" r="18.5404" stroke="black"/><path d="M20.2949 25.5687C20.5962 25.5687 20.8545 25.6763 21.0697 25.8915C21.285 26.1068 21.3926 26.3722 21.3926 26.6879C21.3926 27.0036 21.285 27.2619 21.0697 27.4628C20.8545 27.678 20.5962 27.7856 20.2949 27.7856C19.9935 27.7856 19.7352 27.678 19.52 27.4628C19.3048 27.2619 19.1971 27.0036 19.1971 26.6879C19.1971 26.3722 19.3048 26.1068 19.52 25.8915C19.7352 25.6763 19.9935 25.5687 20.2949 25.5687ZM19.5415 23.3517L19.5415 11.5996L21.0482 11.5996L21.0482 23.3517L19.5415 23.3517Z" fill="black"/></svg></span> Please don’t deposit any other coins into this address</p>
                        </Col>
                    </Row>

                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <span>
                        ARCT
                    </span>
                } key="3">

                    {/* Content Here */}
                    <Row className='justify-content-center'>
                        <Col xs={6} md={6} >
                            <TokenList />
                        </Col>
                        <Col xs={6} md={6} >
                            <div className='float-end text-end'>
                                <h5 className='m-0 amount text-warning fw-bold'>89.67</h5>
                                <p className='m-0 text-dark'>Available</p>
                            </div>
                        </Col>
                        <Col xs={6} md={5} >
                            <div className='text-center'>
                                <img src={qrCode} className='img-fluid p-2' />
                                <p className='m-0 text-dark fw-bolder'>Save QR Code </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center px-2'>
                        <Col xs={7} md={7}>
                                <h5 className='m-0 text-dark'>Address</h5>
                                <p className='m-0 text-dark'>hhfkryixfjotobnndggejmeoaqhgdpndhgghjj</p>
                        </Col>
                        <Col xs={5} md={5}>
                                <button className='btn btn-outline-primary py-1 float-end'>Copy</button>
                        </Col>
                        <Col xs={12} md={12}>
                                <p className='mt-3 mb-0 fw-bold text-warning'><span><svg width="20" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4584" cy="19.8781" r="18.5404" stroke="black"/><path d="M20.2949 25.5687C20.5962 25.5687 20.8545 25.6763 21.0697 25.8915C21.285 26.1068 21.3926 26.3722 21.3926 26.6879C21.3926 27.0036 21.285 27.2619 21.0697 27.4628C20.8545 27.678 20.5962 27.7856 20.2949 27.7856C19.9935 27.7856 19.7352 27.678 19.52 27.4628C19.3048 27.2619 19.1971 27.0036 19.1971 26.6879C19.1971 26.3722 19.3048 26.1068 19.52 25.8915C19.7352 25.6763 19.9935 25.5687 20.2949 25.5687ZM19.5415 23.3517L19.5415 11.5996L21.0482 11.5996L21.0482 23.3517L19.5415 23.3517Z" fill="black"/></svg></span> Please don’t deposit any other coins into this address</p>
                        </Col>
                    </Row>

                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <span>
                        XYZ
                    </span>
                } key="4">

                    {/* Content Here */}
                    <Row className='justify-content-center'>
                        <Col xs={6} md={6} >
                            <TokenList />
                        </Col>
                        <Col xs={6} md={6} >
                            <div className='float-end text-end'>
                                <h5 className='m-0 amount text-warning fw-bold'>89.67</h5>
                                <p className='m-0 text-dark'>Available</p>
                            </div>
                        </Col>
                        <Col xs={6} md={5} >
                            <div className='text-center'>
                                <img src={qrCode} className='img-fluid p-2' />
                                <p className='m-0 text-dark fw-bolder'>Save QR Code </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center px-2'>
                        <Col xs={7} md={7}>
                                <h5 className='m-0 text-dark'>Address</h5>
                                <p className='m-0 text-dark'>hhfkryixfjotobnndggejmeoaqhgdpndhgghjj</p>
                        </Col>
                        <Col xs={5} md={5}>
                                <button className='btn btn-outline-primary py-1 float-end'>Copy</button>
                        </Col>
                        <Col xs={12} md={12}>
                                <p className='mt-3 mb-0 fw-bold text-warning'><span><svg width="20" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4584" cy="19.8781" r="18.5404" stroke="black"/><path d="M20.2949 25.5687C20.5962 25.5687 20.8545 25.6763 21.0697 25.8915C21.285 26.1068 21.3926 26.3722 21.3926 26.6879C21.3926 27.0036 21.285 27.2619 21.0697 27.4628C20.8545 27.678 20.5962 27.7856 20.2949 27.7856C19.9935 27.7856 19.7352 27.678 19.52 27.4628C19.3048 27.2619 19.1971 27.0036 19.1971 26.6879C19.1971 26.3722 19.3048 26.1068 19.52 25.8915C19.7352 25.6763 19.9935 25.5687 20.2949 25.5687ZM19.5415 23.3517L19.5415 11.5996L21.0482 11.5996L21.0482 23.3517L19.5415 23.3517Z" fill="black"/></svg></span> Please don’t deposit any other coins into this address</p>
                        </Col>
                    </Row>

                </Tabs.TabPane>
            </Tabs>
        </>
    )
}

export default DepositTabs
