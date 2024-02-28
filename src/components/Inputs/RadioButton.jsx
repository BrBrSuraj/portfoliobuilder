import { separateAndCapitalize } from "../../utils/utils"

const RadioButton = () => {
  return (
    <>
     <div className="border-2">
      <label  htmlFor={'name'}>{separateAndCapitalize("name")}</label>
      <input
      type='radio'
      name={'male'}
        
       
      />
    </div>

    </>
  )
}

export default RadioButton