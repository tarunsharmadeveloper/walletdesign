import React, { useState } from 'react';
import { Menu, Dropdown, Tabs } from 'antd';
import { DownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'react-bootstrap';
import userIconImg from '../../assets/images/icons/userIcon.svg';
import UserIcon from '../../Components/LandingPages/UserIcon';
import ThemeWidget from '../../Components/LandingPages/ThemeWidget';
import MetaMaskIcon from '../../assets/images/icons/metaMaskIcon.png';
import SubMenu from 'antd/lib/menu/SubMenu';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function UserSettingsDropDown() {
    
    const[DropDownVisible, setDropDownVisible] = useState(false);

    const[toggledTheme, setToggledTheme] = useState(true);

    const ToggleSwtich = () => {
        toggledTheme ? setToggledTheme(false) : setToggledTheme(true);

        if(toggledTheme === true){
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
        }else{
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
        }

        // console.log("Tooglled",toggledTheme);
    }

    const menu = (
        <Menu className='walletdrop'>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="far fa-user"></i></span> Profile</a>
            </Menu.Item>
            
            <SubMenu title={<span><span className='text-primary fw-bold'><i class="fas fa-globe"></i></span> <span className='text-dark fw-bold'> Network (Devnet)</span></span>} icon={<CaretRightOutlined className='ms-2 mt-1 text-dark float-end' />}>
                <Menu.Item>
                    <a href="#" className='text-dark fw-bold'> Mennet</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#" className='text-dark fw-bold'> Devnet</a>
                </Menu.Item>
            </SubMenu>
            
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-plus"></i></span> Add Account</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-file-export"></i></span> Export Menonic</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-history"></i></span> History</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-sign-out-alt"></i></span> Log Out</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold' onClick={ToggleSwtich}>
                    <span>
                        {toggledTheme ?  
                        <span><i class="fas fa-sun text-primary"></i> Light Mode </span>
                        :
                        <span><i class="far fa-moon text-primary"></i> Dark Mode</span>}
                    </span> 
                    </a>
            </Menu.Item>
        </Menu>
      );

    return (
            <>
                
                <div className='walletDropdown'>
                    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={()=> setDropDownVisible(!DropDownVisible)} visible={DropDownVisible}  className='usersettingdrop' placement="bottomLeft">
                        <a className="ant-dropdown-link text-center" onClick={e => e.preventDefault()}>
                            <UserIcon />
                            <p className='font-800 text-dark d-none d-lg-block m-0'><small>Lorem Ipsum</small></p>
                        </a>
                    </Dropdown>
                </div>
            </>
    )
}

export default UserSettingsDropDown