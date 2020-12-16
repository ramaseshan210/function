import React from 'react'
import Select from 'react-select';
import './Forms'





function CustomSelect({style,options,onChange,defaultValue}) {
    return (
        <div style={style} >
           <Select  options={options} onChange={onChange} defaultValue={defaultValue}/>
        </div>
    )
}

export default CustomSelect
