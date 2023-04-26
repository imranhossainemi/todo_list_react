import { React, useState } from 'react';

const Form = () => {
  const [fname, setFname] = useState('');

  const handleChage = (e) => {
    setFname(e.target.value);
  };

  return (
    <div className="form-container">
      <h2>Controlled Form</h2>
      <form>
        <label htmlFor="fname">
          First Name:
          <input type="text" value={fname} name="fname" onChange={handleChage} />
        </label>
      </form>
      <h5>
        First Name:
        {fname}
      </h5>
    </div>
  );
};

export default Form;
