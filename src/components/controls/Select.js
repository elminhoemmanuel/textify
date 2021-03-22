import React, {useState} from 'react'

const Select = ({ onChangeValue }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) =>{
        setValue(e.target.value);
        console.log(value);
        onChangeValue(value);
    }

    return (
        <div>
            <select className="form-control" onChange={handleChange}>
                <option value="text">Yes</option>
                <option value="html">No</option>
            </select>
            
        </div>
    )
}

export default Select
