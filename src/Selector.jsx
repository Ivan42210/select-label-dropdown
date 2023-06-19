import React from 'react';
import { PropTypes } from 'prop-types'
import { useState } from 'react';
import './Selector.css'

/**
 * Selector Component
 *
 * @typedef {Object} SelectorProps
 * @property {string} labelName - The label text for the Selector.
 * @property {string[]} options - The options to display in the dropdown menu.
 * @property {Function} onChange - A callback function triggered when an option is selected.
 *
 * @param {SelectorProps} props - The component props.
 * @returns {JSX.Element} - The rendered Selector component.
 */

export default function Selector({labelName, options, onChange}){
    const [isOpen, setIsOpen ] = useState(false);
    const [ labelvalue, setlabelValue ] = useState(options[0]);

    const toggleList = () => {
      setIsOpen(!isOpen)
    }

    const handleOnClick = (value) =>{
      setlabelValue(value)
      onChange(value);
      setIsOpen(false)
    }

  return(
    <>
      <div className='mbic-selector'> 
          <label  className='mbic-selector-btn' 
                  htmlFor={labelName}
                  onClick={toggleList}>{labelvalue}<div className='mbic-selector-icon'></div></label>
          { isOpen && (
            <ul className='mbic-selector-list'>
              { options.map((option, index) =>(
              <li key={index} className='mbic-selector-item' onClick={() => {handleOnClick(option)}}>{option}</li>
              ))}
            </ul>
          )}

      </div>
    </>
  )
}

Selector.propTypes = {
  labelName: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
