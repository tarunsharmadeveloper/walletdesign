import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css';

function Tables(props) {
    return (
        <div>
            <Table
                bordered={props.border === 'true' ? true : false}
                loading={props.loading === 'true' ? true : false}
                scroll={props.scroll === 'true' ? true : false}
                sticky={props.sticky === 'true' ? true : false}
                rowSelection={props.rowSelection === 'true' ? true : false}
                dataSource={props.data}
                columns={props.headers}
            />
        </div>
    )
}

export default Tables