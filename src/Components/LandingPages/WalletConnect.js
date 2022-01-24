import { Menu, Dropdown, Tabs } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'react-bootstrap';
import WalletIcon from '../../Components/LandingPages/WalletIcon';
import MetaMaskIcon from '../../assets/images/icons/metaMaskIcon.png';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function WalletConnect() {
    const menu = (
        <Menu className='walletdrop'>
          <Menu.Item key="0">
            <Card className='walletDropdownCard'>
                <Card.Body>
                    <Row>
                        <Col xs={12} md={12}>
                            <h5 className='m-0'>CONNECT WALLET</h5>
                            <p className='text-dark'>Current Wallet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Card className='text-dark bg-transparent'>
                                <Card.Body className='p-2'>
                                    <Row className='align-items-center justify-content-between'>
                                        <Col md={12} className='text-start'>
                                            <p className='m-0'><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg></span> Connected</p>
                                        </Col>
                                        <Col xs={6} md={6} className='text-start'>
                                            <p className='m-0'><span><img src={MetaMaskIcon} className='img-fluid' /></span> <small>0xDC...F99D</small></p>
                                        </Col>
                                        <Col xs={6} md={6} className='text-end'>
                                            <a className='m-0 text-blue font-800 text-danger'><small><strong>DISCONNECT</strong></small></a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='my-2'>
                        <Col xs={12} md={12} className=''>
                            <h6 className='m-0 text-dark'>Change Wallet</h6>
                            <p className='text-dark m-0'><small>Select from below</small></p>
                        </Col>
                        <Col xs={12} md={12}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="SALONA" key="1">
                                    <Row>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Polygon" key="2">
                                    <Row>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="BSC" key="3">
                                    <Row>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                        <Col xs={12}>
                                            <button className='walletConnectBtn mb-3'>
                                            <span className='me-3'><img src={MetaMaskIcon} className='img-fluid' /></span> METAMASK
                                            </button>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
          </Menu.Item>
        </Menu>
      );

    return (
            <>
                
                <div className='walletDropdown'>
                    <Dropdown overlay={menu} trigger={['click']} >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <WalletIcon />
                        </a>
                    </Dropdown>
                </div>
            </>
    )
}

export default WalletConnect