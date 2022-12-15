import React, {useState} from 'react'
import EntityInputField from '../components/EntityInputField';

export default function InsertEntityForm() {

    const arr = ['Name', 'Area', 'Vaccinated', 'Carrier', 'Something'];

    // const [value, setValue] = useState('')
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
    }


    return (
        <form onSubmit={handleSubmit} className='entity form flex'>
            {
                Array.apply(null, arr).map((e, i) => (
                <EntityInputField colName={e} key={i} value={value[i]} onChange={handleChange} />
                ))
            }
            <button className='submit-btn' type='submit' >Insert</button>
        </form>
    )
}
