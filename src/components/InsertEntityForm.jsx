import React, {useState} from 'react'
import EntityInputField from '../components/EntityInputField';

export default function InsertEntityForm(props) {

    // const arr = ['Name', 'Area', 'Vaccinated', 'Carrier', 'Something'];
    const arr = props.colNames;
    const colTypes = props.colTypes;

    const [value, setValue] = useState([])

    const handleChange = (val, columnName) => {
        let index = 0;
        for(let i=0; i<arr.length; i++) {
            if(arr[i]===columnName) {
                index = i;
            }
        }
        value[index] = val;
        setValue(value);
    }

    const displayColumns = props.showTable;
    const btnName = props.btnName;

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Following data was ${btnName}ed: \n ${value.map((e, i, value)=>`${arr[i]} : e\n`)}`
        alert(msg)
    }


    return (
        <form onSubmit={handleSubmit} className='entity form flex'>
            {
                displayColumns ? 
                    Array.apply(null, arr).map((e, i) => (
                        <EntityInputField colType={colTypes[i]} colName={e} key={i} value={value[i]} onChange={handleChange} />
                    ))
                : ''
            }
            <button className='submit-btn' type='submit'>{btnName}</button>
        </form>
    )
}
