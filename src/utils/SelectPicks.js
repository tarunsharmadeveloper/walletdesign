import React from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';

function SelectPicks(props) {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <div>
            <Select
                showSearch={props.search ? false : true}
                placeholder={props.placeholder}
                dropdownClassName="selectDropdown"
                disabled={props.disabled}
                optionFilterProp="children"
                className={props.cls}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }

            >
                {props.options ? props.options.map(function (object, i) {
                    return <Select.Option value={object.value}>{object.label}</Select.Option>;
                }) : ''

                }
            </Select>
        </div>
    )
}

export default SelectPicks
