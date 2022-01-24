import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Row, Col, Card } from 'react-bootstrap';
import DepositTabs from './DepositTabs';
import AddTokensTab from './AddTokensTab';
import WithDrawTabs from './WithDrawTabs';


function DashboardMenu() {

    // Deposit Modal
    const [isDepositModalVisible, setIsDepositModalVisible] = useState(false);

    const showModalDeposit = () => {
        setIsDepositModalVisible(true);
    };
  
    const handleOkDeposit = () => {
        setIsDepositModalVisible(false);
    };
  
    const handleCancelDeposit = () => {
        setIsDepositModalVisible(false);
    };

    // Withdraw Modal
    const [isWithdrawtModalVisible, setIsWithdrawModalVisible] = useState(false);

    const showModalWithdraw = () => {
        setIsWithdrawModalVisible(true);
    };
    
    const handleOkWithdraw = () => {
        setIsWithdrawModalVisible(false);
    };
    
    const handleCancelWithdraw = () => {
        setIsWithdrawModalVisible(false);
    };

    // Transfer Modal
    const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);

    const showModalTransfer = () => {
        setIsTransferModalVisible(true);
    };
    
    const handleOkTransfer = () => {
        setIsTransferModalVisible(false);
    };
    
    const handleCancelTransfer = () => {
        setIsTransferModalVisible(false);
    };

    // Add Coin Modal
    const [isAddCoinModalVisible, setIsAddCoinModalVisible] = useState(false);

    const showModalAddCoin = () => {
        setIsAddCoinModalVisible(true);
    };
    
    const handleOkAddCoin = () => {
        setIsAddCoinModalVisible(false);
    };
    
    const handleCancelAddCoin = () => {
        setIsAddCoinModalVisible(false);
    };

    return (
        <>
            <div className='dashboardMenu'>
                <Row className='justify-content-center'>
                    <Col lg={10}>
                        <Card className='menuCard bg-light'>
                            <Card.Body className='pt-5 mb-3'>
                                <Row className='justify-content-center text-center'>
                                    <Col xs={3} lg={3}>
                                            <a href='#' className='menuItems text-dark' onClick={showModalDeposit}>
                                                <p className='mb-0 h5'><span className='iconBox'>
                                                    <i class="fas fa-wallet"></i>
                                                </span></p>
                                                <p className='mb-0 mt-4 pt-2 h5 menutext'>Deposit</p>
                                            </a>
                                                {/* Pop Up Modal */}
                                                <Modal title={<Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Deposit</h5></Col></Row>} visible={isDepositModalVisible} centered onOk={handleOkDeposit} onCancel={handleCancelDeposit}  footer={null} className='dashbordMenuModal'>

                                                    <DepositTabs />

                                                </Modal>
                                    </Col>
                                    <Col xs={3} lg={3}>
                                            <a href='#' className='menuItems text-dark'  onClick={showModalWithdraw}>
                                                <p className='mb-0 h5'><span className='iconBox'>
                                                    <i class="fas fa-download"></i>
                                                </span></p>
                                                <p className='mb-0 mt-4 pt-2 h5 menutext'>Withdraw</p>
                                            </a>

                                            {/* Pop Up Modal */}
                                            <Modal title={<Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Deposit</h5></Col></Row>} visible={isWithdrawtModalVisible} centered onOk={handleOkWithdraw} onCancel={handleCancelWithdraw}  footer={null} className='dashbordMenuModal'>

                                                <WithDrawTabs />

                                            </Modal>
                                    </Col>
                                    <Col xs={3} lg={3}>
                                            <a href='#' className='menuItems text-dark' onClick={showModalTransfer}>
                                                <p className='mb-0 h5'><span className='iconBox'>
                                                    <i class="fas fa-exchange-alt"></i>
                                                </span></p>
                                                <p className='mb-0 mt-4 pt-2 h5 menutext'>Transfer</p>
                                            </a>

                                            {/* Pop Up Modal */}
                                            <Modal title={<Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Deposit</h5></Col></Row>} visible={isTransferModalVisible} centered onOk={handleOkTransfer} onCancel={handleCancelTransfer}  footer={null} className='dashbordMenuModal'>

                                                <DepositTabs />

                                            </Modal>
                                    </Col>
                                    <Col xs={3} lg={3}>
                                            <a href='#' className='menuItems text-dark' onClick={showModalAddCoin}>
                                                <p className='mb-0 h5'><span className='iconBox'>
                                                <i class="fas fa-plus"></i>
                                                </span></p>
                                                <p className='mb-0 mt-4 pt-2 h5 menutext'>Add Coin</p>
                                            </a>

                                            {/* Pop Up Modal */}
                                            <Modal title={<Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Deposit</h5></Col></Row>} visible={isAddCoinModalVisible} centered onOk={handleOkAddCoin} onCancel={handleCancelAddCoin}  footer={null} className='dashbordMenuModal'>

                                                <AddTokensTab />

                                            </Modal>
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

export default DashboardMenu
