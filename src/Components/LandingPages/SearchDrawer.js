import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, CardGroup, Row, Col, Card, Accordion, Form } from 'react-bootstrap';
import { Drawer, Button, Input, Select } from 'antd';
import LogoMob_Black from '../../assets/images/logo/mobDrawerLogoBlack.svg';
import SearchBox from './SearchBox';
import Logo from './Logo';

function SearchDrawer(props) {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    const { Option } = Select;

const { TextArea } = Input;

const onChange = e => {
    console.log(e);
  };


  const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

    return (
            <>
                <div className=''>
                    <button onClick={showDrawer}  className="btn float-end mt-1">
                        <span className='text-dark h5'><i className="fas fa-filter"></i></span>
                    </button>
                    <Drawer title={<Row><Col xs={8} md={6}><Logo /></Col></Row>} placement="right" width='100%' onClose={onClose} visible={visible} className='menuDrawer bg-white ListSection'>
                    {/* <Row>
                        <Col className=''>
                            <h3 className='text-dark'>Filter</h3>
                            <hr/>
                        </Col>
                    </Row> */}
                    <Row className='py-3 pb-4 align-items-end filterBox'>
                                <Col xl={3} className='py-3'>
                                    <SearchBox />
                                </Col>
                                <Col xl={2} className='py-3'>
                                    <p className='mb-2 text-dark'>Price</p>
                                    <Row>
                                        <Col xs={6} lg={6}>
                                            <div className="mb-0">                                                    
                                                <Input placeholder="Min." />
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={6}>
                                            <div className="mb-0">                                                    
                                                <Input placeholder="Max." />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={3} className='py-3'>
                                    <p className='mb-2 text-dark'>FILTER BY ATTRIBUTES</p>
                                    <div className="mb-0">                   
                                        <Select
                                            mode="multiple"
                                            size='large'
                                            showArrow
                                            placeholder="Photography"
                                            defaultValue={[]}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            className='mb-0'
                                        >
                                            {children}
                                        </Select>
                                    </div>
                                </Col>
                                <Col xl={3} className='py-3'>
                                    <p className='mb-2 text-dark'>SORT BY:</p>
                                    <div className="mb-0">                   
                                        <Select
                                            mode="multiple"
                                            size='large'
                                            showArrow
                                            placeholder="Recently Listed"
                                            defaultValue={[]}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            className='mb-0'
                                        >
                                            {children}
                                        </Select>
                                    </div>
                                </Col>
                                <Col xl={1} className='py-3'>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-0 text-right">       
                                                <a className="btn filterBtn" href="#"><i className="fas fa-filter"></i> FILTER</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                    </Drawer>
                </div>
            </>
    )
}

export default SearchDrawer
