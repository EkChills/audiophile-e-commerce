import { useSelector } from "react-redux"

const FormRowRadio = ({onChange, value, labelText, id}) => {
  const {inputValues} = useSelector((store) => store.cart)
  return (
    <div className='flex items-center p-4 w-full max-w-xs rounded-lg space-x-3 border border-borderColor focus:border-orange'>
      <input type="radio" id={id} name="paymentMethod" value={value} onChange={onChange} checked={inputValues.paymentMethod === value} />
      <label className='text-[14px] text-pureBlack font-bold'  htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default FormRowRadio