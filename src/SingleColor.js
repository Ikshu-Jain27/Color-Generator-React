import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

// To convert rgb to hex value
// Method 1:
// const SingleColor = ({ rgb, weight, index, hexColor }) => {
//   const [alert, setAlert] = useState(false) // displayed when we copy something from the clipboard
//   // to render the rgb array as a background, first represent/convert it in the form of a string
//   const bcg = rgb.join() // join it into the string with the help of commas
//   const hexValue = `#${hexColor}`
//   return (
//     // conditionally check, if the value of index is greater than 10 then add a new class as well
//     <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}> {/* we have used{{}} for style as we need to go back to the javascript */}
//       <p className='percent-value'>{weight}%</p>
//       <p className='color-value'>{hexValue}</p>
//     </article>
//   ) 
// }

// Method 2:
// const SingleColor = ({ rgb, weight, index, hexColor }) => {
//   const [alert, setAlert] = useState(false) // displayed when we copy something from the clipboard
//   // to render the rgb array as a background, first represent/convert it in the form of a string
//   const bcg = rgb.join() // join it into the string with the help of commas
//   const hex = rgbToHex(...rgb)
//   return (
//     // conditionally check, if the value of index is greater than 10 then add a new class as well
//     <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}> {/* we have used{{}} for style as we need to go back to the javascript */}
//       <p className='percent-value'>{weight}%</p>
//       <p className='color-value'>{hex}</p>
//     </article>
//   ) 
// }

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false) // displayed when we copy something from the clipboard
  // to render the rgb array as a background, first represent/convert it in the form of a string
  const bcg = rgb.join() // join it into the string with the help of commas
  const hexValue = `#${hexColor}`
  // to remove the copied to clipboard command after 3 secs. useEffect is being used to set this timer. (each time when the value of alert changes)
  // setTimeout will be looking for 2 things namely, callback function and for how long it has to run.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000)
    // before setting up another timeout, clear the first one
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor:`rgb(${bcg})`}} 
      onClick={ () => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue) // to cpy the value to clipboard
      }} > {/* we have used{{}} for style as we need to go back to the javascript */}
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  ) 
}

export default SingleColor