import React, {useState} from 'react';
import './Slider.scss';

const DateInput = ({step, min, max, value, onChange}) => {
  const [val, setVal] = useState(value);

  return (
    <input
      className='slider is-fullwidth'
      step={step}
      min={min}
      max={max}
      value={val}
      type='range'
      onChange={({target}) => setVal(target.value) || onChange(+target.value)}
    />
  )
}

export default DateInput
