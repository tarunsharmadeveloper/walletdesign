import React from 'react';
import { List, Avatar } from 'antd';
import assetIcon from '../../assets/images/icons/asset_icon.png';


function DashboardMenu() {

    const data = [
        {
          title: 'Solona',
        },
      ];

    return (
        <>
            <div className='TokenList'>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    
                    renderItem={item => (
                    <List.Item className='p-0'>
                        <List.Item.Meta
                        avatar={<Avatar src={assetIcon} />}
                        title={<a href="#"  className='fw-bolder text-dark' >{item.title}</a>}
                        description={<p className='m-0 text-dark'>75.900 USD</p>}
                         className='text-dark'/>
                    </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default DashboardMenu
