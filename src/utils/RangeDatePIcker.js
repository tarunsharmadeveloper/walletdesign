import React, { useState } from 'react'
import { DatePicker, Space } from 'antd';
import moment from 'moment';

import 'antd/dist/antd.css';

function RangeDatePIcker() {
    const dateFormat = 'MM/DD/YYYY';
    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    const strtDate = moment(date).subtract(30, 'days').format(dateFormat);
    const end_Date = moment(date).format(dateFormat);

    const [startDate, setStartDate] = useState(strtDate)
    const [endDate, setEndDate] = useState(end_Date)

    console.log(startDate);
    return (
        <div>
            <DatePicker.RangePicker
                defaultValue={[moment(startDate, dateFormat), moment(endDate, dateFormat)]}
                format={dateFormat}
                inputReadOnly={true}
            />
        </div>
    )
}

export default RangeDatePIcker
