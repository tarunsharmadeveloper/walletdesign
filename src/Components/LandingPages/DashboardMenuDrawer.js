import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Drawer, Button, Space, Radio } from 'antd';
import DepositTabs from './DepositTabs';
import AddTokensTab from './AddTokensTab';
import WithDrawTabs from './WithDrawTabs';


function DepositMenuDrawer() {

    
    // Deposit Modal
    const [visibleDeposit, setVisibleDeposit] = useState(false);
    // const [placement, setPlacement] = useState('bottom');
  
    const showDrawerDeposit = () => {
      setVisibleDeposit(true);
    };
  
    const onCloseDeposit = () => {
      setVisibleDeposit(false);
    };


    // Withdraw Modal

    const [visibleWithdraw, setVisibleWithdraw] = useState(false);
    // const [placement, setPlacement] = useState('bottom');
  
    const showDrawerWithdraw = () => {
      setVisibleWithdraw(true);
    };
  
    const onCloseWithdraw = () => {
      setVisibleWithdraw(false);
    };

    
    // Transfer Modal

    const [visibleTransfer, setVisibleTransfer] = useState(false);
    // const [placement, setPlacement] = useState('bottom');
  
    const showDrawerTransfer = () => {
      setVisibleTransfer(true);
    };
  
    const onCloseTransfer = () => {
      setVisibleTransfer(false);
    };


    // Add Coin Modal

    const [visibleAddCoin, setVisibleAddCoin] = useState(false);
    // const [placement, setPlacement] = useState('bottom');
    
    const showDrawerAddCoin = () => {
        setVisibleAddCoin(true);
    };
    
    const onCloseAddCoin = () => {
        setVisibleAddCoin(false);
    };
    return (
        <>
        <div className='dashboardMenu downDrawer'>
            <Row className='justify-content-center'>
                <Col lg={10}>
                    <Card className='menuCard bg-light'>
                        <Card.Body className='pt-5 mb-3'>
                            <Row className='justify-content-center text-center'>
                                <Col xs={3} lg={3}>
                                        <a href='#' className='menuItems text-dark' onClick={showDrawerDeposit}>
                                            <p className='mb-0 h5'><span className='iconBox'>
                                                <i class="fas fa-wallet"></i>
                                            </span></p>
                                            <p className='mb-0 mt-4 pt-2 h5 menutext'>Deposit</p>
                                        </a>
                                            {/* Pop Up Drawer */}
                                            
                                        <Drawer
                                            title={ <Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Deposit</h5></Col></Row>}
                                            placement={"bottom"}
                                            height={'80vh'}
                                            onClose={onCloseDeposit}
                                            visible={visibleDeposit}
                                            className='menuDrawer'
                                            // extra={
                                            // <Space>
                                            //     <Button onClick={onClose}>Cancel</Button>
                                            //     <Button type="primary" onClick={onClose}>
                                            //     OK
                                            //     </Button>
                                            // </Space>
                                            // }
                                        >
                                            <div>
                                                <DepositTabs />
                                            </div>
                                        </Drawer>
                                </Col>
                                <Col xs={3} lg={3}>
                                        <a href='#' className='menuItems text-dark' onClick={showDrawerWithdraw}>
                                            <p className='mb-0 h5'><span className='iconBox'>
                                                <i class="fas fa-download"></i>
                                            </span></p>
                                            <p className='mb-0 mt-4 pt-2 h5 menutext'>Withdraw</p>
                                        </a>
       
                                            {/* Pop Up Drawer */}

                                        <Drawer
                                            title={ <Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Withdraw</h5></Col></Row>}
                                            placement={"bottom"}
                                            height={'80vh'}
                                            onClose={onCloseWithdraw}
                                            visible={visibleWithdraw}
                                            className='menuDrawer'
                                            // extra={
                                            // <Space>
                                            //     <Button onClick={onClose}>Cancel</Button>
                                            //     <Button type="primary" onClick={onClose}>
                                            //     OK
                                            //     </Button>
                                            // </Space>
                                            // }
                                        >
                                            <div>
                                                <WithDrawTabs />
                                            </div>
                                        </Drawer>
                                </Col>
                                <Col xs={3} lg={3}>
                                        <a href='#' className='menuItems text-dark' onClick={showDrawerAddCoin}>
                                            <p className='mb-0 h5'><span className='iconBox'>
                                                <i class="fas fa-exchange-alt"></i>
                                            </span></p>
                                            <p className='mb-0 mt-4 pt-2 h5 menutext'>Transfer</p>
                                        </a>
                                        
                                            {/* Pop Up Drawer */}

                                        <Drawer
                                            title={ <Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Transfer</h5></Col></Row>}
                                            placement={"bottom"}
                                            height={'80vh'}
                                            onClose={onCloseAddCoin}
                                            visible={visibleAddCoin}
                                            className='menuDrawer'
                                            // extra={
                                            // <Space>
                                            //     <Button onClick={onClose}>Cancel</Button>
                                            //     <Button type="primary" onClick={onClose}>
                                            //     OK
                                            //     </Button>
                                            // </Space>
                                            // }
                                        >
                                            <div>
                                                <DepositTabs />
                                            </div>
                                        </Drawer>
                                </Col>
                                <Col xs={3} lg={3}>
                                        <a href='#' className='menuItems text-dark' onClick={showDrawerTransfer}>
                                            <p className='mb-0 h5'><span className='iconBox'>
                                            <i class="fas fa-plus"></i>
                                            </span></p>
                                            <p className='mb-0 mt-4 pt-2 h5 menutext'>Add Coin</p>
                                        </a>
                                        
                                        {/* Pop Up Drawer */}

                                    <Drawer
                                        title={ <Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Add Coin</h5></Col></Row>}
                                        placement={"bottom"}
                                        height={'80vh'}
                                        onClose={onCloseTransfer}
                                        visible={visibleTransfer}
                                        className='menuDrawer'
                                        // extra={
                                        // <Space>
                                        //     <Button onClick={onClose}>Cancel</Button>
                                        //     <Button type="primary" onClick={onClose}>
                                        //     OK
                                        //     </Button>
                                        // </Space>
                                        // }
                                    >
                                        <div>
                                            <AddTokensTab />
                                        </div>
                                    </Drawer>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default DepositMenuDrawer
