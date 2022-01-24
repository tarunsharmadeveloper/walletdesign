import React, { useState } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
function SingleDatePicker(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker
                inputReadOnly={props.readOnly}
                mode={props.mode}
                picker={props.picker}
                showToday={false}
                className={props.cls}
                format={props.format}
            />
        </div>
    )
}

export default SingleDatePicker
