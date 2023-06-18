import { PropTypes } from 'prop-types'
import { useState } from 'react';
import './Selector.css'

/**
 * SelectMenu Component
 *
 * @typedef {Object} SelectMenuProps
 * @property {string} labelName - The label text for the SelectMenu.
 * @property {string[]} options - The options to display in the dropdown menu.
 * @property {Function} onChange - A callback function triggered when an option is selected.
 *
 * @param {SelectMenuProps} props - The component props.
 * @returns {JSX.Element} - The rendered SelectMenu component.
 */


export default function SelectMenu({labelName, options, onChange}){
    const [isOpen, setIsOpen ] = useState(false);
    const [ labelvalue, setlabelValue ] = useState(options[0]);

    const toggleList = () => {
      setIsOpen(!isOpen)
    }

    const handleOnClick = (value) =>{
      setlabelValue(value)
      onChange(labelvalue);
      setIsOpen(false)
    }

  return(
    <>
      <div className='selector'> 
          <label  className='selector-btn' 
                  htmlFor={labelName}
                  onClick={toggleList}>{labelvalue}<div className='selector-icon'></div></label>
          { isOpen && (
            <ul className='selector-list'>
              { options.map((option, index) =>(
              <li key={index} className='selector-item' onClick={() => {handleOnClick(option)}}>{option}</li>
              ))}
            </ul>
          )}

      </div>
    </>
  )
}

SelectMenu.propTypes = {
  labelName: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};