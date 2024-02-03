import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className=' bg-pink-400'>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
}

export default CheckboxExample;
