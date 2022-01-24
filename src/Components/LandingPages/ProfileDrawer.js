import React, { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import { Drawer, Popover } from 'antd';
import LogoMob_Black from '../../assets/images/logo/mobDrawerLogoBlack.svg';
import Logo from './Logo';
import UserIcon from './UserIcon';

function ProfileDrawer() {

    // Network Selection PopOver
    const content = (
        <div>
          <p className='m-0'><a href='#' className='text-dark'>Mennet</a></p>
          <p className='m-0'><a href='#' className='text-dark'>Devnet</a></p>
        </div>
      );

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    return (
            <>
                
                <div className='profileDrawer'>
                    <a href='#' onClick={showDrawer}  className="menuIcon float-end">
                        <UserIcon />
                        <p className='font-800 text-dark d-none d-lg-block m-0'><small>Lorem Ipsum</small></p>
                    </a>
                    <Drawer title={<Row><Col xs={8} md={6}><Logo /></Col></Row>} placement="left" width='100%' onClose={onClose} visible={visible} className='menuDrawer profileDraw bg-white'>
                        <div className='text-dark'>
                            <Row className='align-items-center'>
                                <Col xs={8}>
                                    <h3 className='text-dark'>Lorem Ipsumfhjj</h3>
                                </Col>
                                <Col xs={4}>
                                    <span>
                                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="43" cy="43" r="43" fill="#C4C4C4"/>
                                        </svg>
                                    </span>
                                </Col>
                                <Col xs={12}>
                                    <p className='text-dark'> simply dummy text of t</p>
                                </Col>
                            </Row>
                            <hr />
                            <ul className="list-unstyled ms-2">
                                <li className="mb-4">
                                    
                                    <Popover content={content} trigger="click" className='networkpopover' placement="bottom">
                                        <Row className='align-items-center justify-content-start row-cols-auto'>
                                            <Col className=''>
                                                <span className='h2'><i class="fas fa-globe"></i></span>
                                            </Col>
                                            <Col>
                                                <p class="h3 m-0 fw-bold">Network</p> <p class="m-0 fw-bold text-muted">DEVNET</p>
                                            </Col>
                                            <Col>
                                                <span className='h2'><i class="fas fa-caret-right"></i></span>
                                            </Col>
                                        </Row>
                                    </Popover>
                                </li>
                                <li className="mb-4">
                                    <Row className='align-items-center justify-content-start row-cols-auto'>
                                        <Col className=''>
                                            <span className='h2 '><i class="fas fa-plus"></i></span>
                                        </Col>
                                        <Col>
                                            <p class="h3 m-0 fw-bold">Add Account</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-4">
                                    <Row className='align-items-center justify-content-start row-cols-auto'>
                                        <Col className=''>
                                            <span className='h2'><i class="fas fa-file-export"></i></span>
                                        </Col>
                                        <Col>
                                            <p class="h3 m-0 fw-bold">Export Menonic</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-4">
                                    <Row className='align-items-center justify-content-start row-cols-auto'>
                                        <Col className=''>
                                            <span className='h2'><i class="fas fa-globe"></i></span>
                                        </Col>
                                        <Col>
                                            <p class="h3 m-0 fw-bold">Lorem Ipsum</p>
                                            <p className='m-0'>is simply dummy</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="mb-4">
                                    <Row className='align-items-center justify-content-start row-cols-auto'>
                                        <Col className=''>
                                            <span className='h2'><i class="fas fa-globe"></i></span>
                                        </Col>
                                        <Col>
                                            <p class="h3 m-0 fw-bold">Lorem Ipsum</p>
                                            <p className='m-0'>is simply dummy</p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </div>
                    </Drawer>
                </div>
            </>
    )
}

export default ProfileDrawer
