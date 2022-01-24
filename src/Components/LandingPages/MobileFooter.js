import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
import { Col, Row } from 'react-bootstrap';
import { Drawer, Button, Space, Radio, List, Avatar } from 'antd';
import DepositTabs from './DepositTabs';
import SearchBox from './SearchBox';

function MobileFooter() {

    // Setting Drawer
    const [visibleSetting, setVisibleSetting] = useState(false);
    // const [placement, setPlacement] = useState('bottom');
  
    const showDrawerSetting = () => {
      setVisibleSetting(true);
    };
  
    const onCloseSetting = () => {
      setVisibleSetting(false);
    };

    // Search Drawer
    const [visibleSearch, setVisibleSearch] = useState(false);
    // const [placement, setPlacement] = useState('bottom');
    
    const showDrawerSearch = () => {
        setVisibleSearch(true);
    };
    
    const onCloseSearch = () => {
        setVisibleSearch(false);
    };


    const data = [
        {
          title: 'Personal Info',
        },
        {
          title: 'Notification',
        },
        {
          title: 'Privacy &Security',
        },
      ];

      const data2 = [
        {
          title: 'About',
        },
        {
          title: 'Help & feedback',
        },
        {
          title: 'Lock App',
        },
        {
          title: 'Sign out',
        },
      ];
    return (
            <>
                
                <div className='mobileFooter text-center py-3 d-lg-none d-xl-none d-xxl-none'>
                    <Row className='justify-content-center'>
                        <Col xs={3}>
                            <a href='#' className='menuItems text-dark h4'>
                                <i class="fas fa-home"></i>
                            </a>
 
                        </Col>
                        <Col xs={3}>
                            <a href='#' className='text-dark h4'>
                                <i class="fas fa-history"></i>
                            </a>
                            
                        </Col>

                        <Col xs={3}>
                            <a href='#' className='text-dark h4' onClick={showDrawerSearch}>
                                <i class="fas fa-search"></i>
                            </a>

                            
                            <Drawer
                                    // title={ <Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Settings</h5></Col></Row>}
                                    placement={"bottom"}
                                    // height={'80vh'}
                                    onClose={onCloseSearch}
                                    visible={visibleSearch}
                                    className='menuDrawer settingDrawer'
                                    // extra={
                                    // <Space>
                                    //     <Button onClick={onClose}>Cancel</Button>
                                    //     <Button type="primary" onClick={onClose}>
                                    //     OK
                                    //     </Button>
                                    // </Space>
                                    // }
                                >
                                    <div className='text-dark'>
                                        <Row className='align-items-center'>
                                            <Col xs={12}>
                                                <div className='mobileSearch'>
                                                    <SearchBox />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Drawer>
                        </Col>
                        <Col xs={3}>
                            <a href='#' className='text-dark h4' onClick={showDrawerSetting}>
                                <i class="fas fa-cog"></i>
                            </a>
                                <Drawer
                                    // title={ <Row><Col xs={12} md={12}><h5 className=' m-0 text-center text-dark fw-bolder'>Settings</h5></Col></Row>}
                                    placement={"bottom"}
                                    height={'80vh'}
                                    onClose={onCloseSetting}
                                    visible={visibleSetting}
                                    className='menuDrawer settingDrawer'
                                    // extra={
                                    // <Space>
                                    //     <Button onClick={onClose}>Cancel</Button>
                                    //     <Button type="primary" onClick={onClose}>
                                    //     OK
                                    //     </Button>
                                    // </Space>
                                    // }
                                >
                                    <div className='text-dark'>
                                        <h2 className=' text-left text-dark fw-bolder'>Settings</h2>
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                            <List.Item className=' border-0'>
                                                <List.Item.Meta
                                                avatar={<h5 className='mt-2 text-dark'><i class="fas fa-chevron-right"></i></h5>}
                                                title={<h4 className='mt-1 text-dark'>{item.title}</h4>}
                                                className='d-flex justify-content-center'/>
                                            </List.Item>
                                            )}
                                        />
                                        <hr />
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data2}
                                            renderItem={item => (
                                            <List.Item className=' border-0'>
                                                <List.Item.Meta
                                                avatar={<h5 className='mt-2 text-dark'><i class="fas fa-chevron-right"></i></h5>}
                                                title={<h4 className='mt-1 text-dark'>{item.title}</h4>}
                                                className='d-flex justify-content-center'/>
                                            </List.Item>
                                            )}
                                        />
                                    </div>
                                </Drawer>
                        </Col>
                    </Row>
                </div>
            </>
    )
}

export default MobileFooter
