
import { separateAndCapitalize } from "../../utils/utils";
import PropTypes from 'prop-types'

const RadioButton = ({ options, selectedValue, onchange }) => {
  return (
   <>
    <div className="flex flex-row gap-2">
    {options?.map((option) => (
        <label key={option.value}>
          <input
         
            type="radio"
            value={option.value}
            checked={selectedValue === option.value} //to determine which option is selected or checked
            onChange={() => onchange(option.value)}
          />
          {separateAndCapitalize(option.label)}
        </label>
      ))}
      </div>
   </>
  );
};

RadioButton.propTypes={
 
  options: PropTypes.array,
  selectedValue: PropTypes.string,
  onchange: PropTypes.func,

  }

export default RadioButton;
