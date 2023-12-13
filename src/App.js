import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false); // as if something do not make sense then we are going to spit back the value
  const [list, setList] = useState(new Values('#f15025').all(10)); // we want to display some list of values by default
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10); // it will generate both 100 divided by 10 tints and 100 divided by 10 shades along with the base value
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' className={`${error ? 'error' : null}`} /> {/* put a red border conditionally i.e. only when error is true. Therefore, we are using a template string for the className */}
          {/* ${error} means check the state value for error. If the value for error is true then add the class of error and if it is false then add null */}
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          // Method 1 -->
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          
          // Method 2 -->            
          {/* return <SingleColor key={index} {...color} index={index}/> */}
        })}
      </section>
    </>
  )
}

export default App
