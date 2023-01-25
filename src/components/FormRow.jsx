import React from 'react'

const FormRow = ({ text, labelText, type, value, name, placeholder, onChange, id }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={id}>
        <span className="label-text capitalize text-pureBlack text-[12px] font-bold">{labelText ? labelText : text}</span>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="input text-darkGray input-bordered w-full max-w-xs"
        onChange={onChange}
        id={id}
      />
    </div>
  )
}

export default FormRow