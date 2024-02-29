import { separateAndCapitalize } from "../../utils/utils";
import PropTypes from 'prop-types'

const TextArea = ({name,onInputChange,className, ...others}) => {
  
  return (
    <div className="flex flex-col justify-start w-full p-1 gap-1">
      <label className='text-sm px-[0.5] tracking-wider' htmlFor={name}>{separateAndCapitalize(name)}</label>
      <textarea rows={7}
        className={`w-full md:5/12 py-1 px-2 outline-none border-2 border-gray-300 rounded-md ${className? className:''}`}
        name={name}
        id={name}

        onChange={(e)=>{onInputChange(e.target.value)}}
        {...others}
      />
    </div>
  );
};

// defining the props types
TextArea.propTypes={
name: PropTypes.string,
type: PropTypes.string,
id: PropTypes.string,
value: PropTypes.string,
onInputChange: PropTypes.func,
className:PropTypes.string,
}
export default TextArea;


