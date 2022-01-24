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

function SettingDropdown() {
    
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
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-chevron-circle-right"></i></span> Personal Info</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-chevron-circle-right"></i></span> Notification</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-chevron-circle-right"></i></span> Privacy &amp;Security</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-chevron-circle-right"></i></span> Privacy &amp;About</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-chevron-circle-right"></i></span> Help &amp; Feedback</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className='text-dark fw-bold'><span className='text-primary'><i class="fas fa-chevron-circle-right"></i></span> Lock App</a>
            </Menu.Item>
        </Menu>
      );

    return (
            <>
                
                <div className='walletDropdown'>
                    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={()=> setDropDownVisible(!DropDownVisible)} visible={DropDownVisible}  className='usersettingdrop' placement="bottomLeft">
                        <a className="ant-dropdown-link text-center" onClick={e => e.preventDefault()}>
                            <span className='text-primary h3 me-2'><i class="fas fa-cog"></i></span>
                        </a>
                    </Dropdown>
                </div>
            </>
    )
}

export default SettingDropdown