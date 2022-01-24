import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Badge, Row, Col } from 'react-bootstrap';
import Logo_black from '../../assets/images/logo/logo_black.svg';
import { Menu, Dropdown } from 'antd';
import MenuDrawer from '../../Components/LandingPages/MenuDrawer';
import { DownOutlined } from '@ant-design/icons';
import SearchBox from '../../Components/LandingPages/SearchBox';
import Logo from './Logo';
import WalletIcon from './WalletIcon';
import UserSettingsDropDown from './UserSettingsDropDown';
import ProfileDrawer from './ProfileDrawer';
import SettingDropdown from './SettingDropdown';


function HeaderWhite() {
    return (
    <>
        <div className='header header-white bg-white p-2 px-3 px-lg-4 py-2'>
            <div className="container-fluid">
                <Row className='align-items-center'>
                                  
                    <Col xs={1} md={1} lg={3} xl={3} className="ps-0 p-0 d-flex d-lg-none d-xl-none d-xxl-none">
                            <span className="" ><ProfileDrawer /></span>
                    </Col>
                    <Col xs={6} md={5} lg={3} xl={2} className="ps-2 p-0 d-flex justify-content-start">
                        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                    </Col>
                    <Col xs={4} md={3} lg={3} xl={5} className="ps-0 p-0 d-none d-lg-block">
                        <ul className="navbar-nav d-flex flex-row top-nav-items align-items-center justify-content-center">

                            <li className="nav-item ps-5 ms-5">
                                <a className="nav-link menu-btn p-0" href="#">
                                    Assets
                                </a> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={5} md={6} lg={6} xl={5} className="ps-0 pe-0">

                        <div className="">
                            {/* <!-- Center Menu Bar --> */}
                            <ul className="navbar-nav d-flex flex-row top-nav-items align-items-center justify-content-end">

                                <li className="nav-item me-4 d-none d-lg-block">
                                    <a className="nav-link" href="#">
                                    <SearchBox/>
                                    </a> 
                                </li>
                                <li className="nav-item me-4">
                                    <a className="nav-link" href="#">
                                        <p className='m-0'><small>Total Value</small></p>
                                        <p className='h5 m-0 totalAmount'>$ 7.046</p>
                                        </a> 
                                </li>
                                <li className="nav-item p-0 d-none d-lg-block">
                                    <a className="nav-link p-0" href="#">
                                        {/* <WalletIcon /> */}
                                        <SettingDropdown />
                                    </a> 
                                </li>
                                <li className="nav-item p-0 d-none d-lg-block">
                                    <a className="nav-link p-0" href="#">
                                        {/* <WalletIcon /> */}
                                        <UserSettingsDropDown />
                                    </a> 
                                </li>
                            </ul>
                        </div>
                    </Col>
                    
                    {/* <Col xs={5} md={6} xl={9} className="pe-0 d-lg-none d-xl-none d-xxl-none mobile-menu">
                        <div className="d-flex justify-content-end">
                            <MenuDrawer iconColor={"black"} /> 
                        </div>
                    </Col> */}
                    <Col xs={12} lg={8} xl={9} className="py-3 p-0 d-lg-none d-xl-none d-xxl-none">
                        <ul className="navbar-nav d-flex flex-row top-nav-items align-items-center justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link menu-btn p-0" href="#">
                                    Assets
                                </a> 
                            </li>
                        </ul>
                    </Col>

                </Row>
            </div>
        </div>
    </>
    )
}

export default HeaderWhite
