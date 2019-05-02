import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';

const Slider = ({step, min, max, value, onChange}) => {
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

Slider.propTypes = {
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  value: 50,
  onChange: () => void 0
};

export default Slider;
