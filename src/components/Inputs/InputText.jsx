import { separateAndCapitalize } from "../../utils/utils";
import PropTypes from 'prop-types'

const InputText = ({name, type,onInputChange,className, ...others}) => {
 
  return (
    <div className="flex flex-col justify-start w-full p-1 gap-2">
      <label className='text-sm font-semibold tracking-wider' htmlFor={name}>{separateAndCapitalize(name)}</label>
      <input
        className={`w-full md:5/12 py-1 outline-none border-b-2 border-gray-300 text-sm ${className? className:''}`}
        type={type}
        name={name}
        id={name}
        onChange={(e)=>onInputChange(e.target.value)}
        {...others}
      />
    </div>
  );
};

// defining the props types
InputText.propTypes={
name: PropTypes.string,
type: PropTypes.string,
id: PropTypes.string,
value: PropTypes.string,
onInputChange: PropTypes.func,
className:PropTypes.string,
}
export default InputText;

// name={probs.name}
// placeholder={probs.placeholder}
// id={probs.id}
// value={probs.value}
// onChange={probs.onChange}
