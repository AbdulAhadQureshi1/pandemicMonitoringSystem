import React from 'react'

export default function EntityInputField(props) {

    const columnName = props.colName;

    const handleChange = (e) => {
      props.onChange(e.target.value, e.target.placeholder)
    }

  return (
    <div className='input-set flex' >
      <label className='font'>{`${columnName}` + '[Type]'}</label>
      <input className='entity input-field font' key={columnName} value={props.value} onChange={handleChange} type={'text'} placeholder={`${columnName}`} />
    </div>
  )
}
