import { Tabs, TabPane } from 'antd';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import qrCode from '../../assets/images/icons/qrCode.png';
import TokenList from '../../Components/LandingPages/TokenList';
import assetIcon from '../../assets/images/icons/asset_icon.png';



function WithDrawTabs() {
    
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

                    <Row className=''>
                        <Col md={12}>
                            <div className='text-center'>
                                <img src={assetIcon} className='img-fluid p-2' />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Amount</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="0.00" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-end'><span>17.9999</span> SOL</p>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-2"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Recipient Address</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Recipient Address" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-start'>Enter Solana Address</p>
                        </Col>
                    </Row>

                    <Row className='align-items-center text-center pt-3 pb-2'>
                        <Col md={12}>
                                <button className='btn btn-outline-primary py-1'>SEND</button>
                        </Col>
                    </Row>

                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <span>
                        EHT
                    </span>
                } key="2">

                    {/* Content Here */}
                    
                    <Row className=''>
                        <Col md={12}>
                            <div className='text-center'>
                                <img src={assetIcon} className='img-fluid p-2' />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Amount</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="0.00" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-end'><span>17.9999</span> SOL</p>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-2"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Recipient Address</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Recipient Address" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-start'>Enter Solana Address</p>
                        </Col>
                    </Row>

                    <Row className='align-items-center text-center pt-3 pb-2'>
                        <Col md={12}>
                                <button className='btn btn-outline-primary py-1'>SEND</button>
                        </Col>
                    </Row>

                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <span>
                        ARCT
                    </span>
                } key="3">

                    {/* Content Here */}
                    <Row className=''>
                        <Col md={12}>
                            <div className='text-center'>
                                <img src={assetIcon} className='img-fluid p-2' />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Amount</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="0.00" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-end'><span>17.9999</span> SOL</p>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-2"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Recipient Address</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Recipient Address" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-start'>Enter Solana Address</p>
                        </Col>
                    </Row>

                    <Row className='align-items-center text-center pt-3 pb-2'>
                        <Col md={12}>
                                <button className='btn btn-outline-primary py-1'>SEND</button>
                        </Col>
                    </Row>

                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <span>
                        XYZ
                    </span>
                } key="4">

                    {/* Content Here */}
                    <Row className=''>
                        <Col md={12}>
                            <div className='text-center'>
                                <img src={assetIcon} className='img-fluid p-2' />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-1"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Amount</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="0.00" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-end'><span>17.9999</span> SOL</p>
                        </Col>
                        <Col md={12}>
                            <div class="artchive-form-box pt-2"><div class="form-group artchive-form-input"><div class=""><label for="formGroupExampleInput" class="artchive-label">Recipient Address</label></div><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Recipient Address" value="" /></div></div>
                                <p className='m-0 mt-2 text-dark text-start'>Enter Solana Address</p>
                        </Col>
                    </Row>

                    <Row className='align-items-center text-center pt-3 pb-2'>
                        <Col md={12}>
                                <button className='btn btn-outline-primary py-1'>SEND</button>
                        </Col>
                    </Row>

                </Tabs.TabPane>
            </Tabs>
        </>
    )
}

export default WithDrawTabs
