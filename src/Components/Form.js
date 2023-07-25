import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0,
  });

  const handleChage = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Audi', 'Toyata'];

  const carBrandOptions = carBrands.map((carBrand) => (
    <option value={carBrand} key={uuidv4()}>
      {carBrand}
    </option>
  ));

  return (
    <div className="form-container">
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">
          First Name:
          {' '}
          <input type="text" value={state.fname} name="fname" onChange={handleChage} />
        </label>
        <label htmlFor="lname">
          last Name:
          {' '}
          <input type="text" value={state.lname} name="lname" onChange={handleChage} />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChage}
          />
        </label>
        <label htmlFor="carBrand">
          Car Brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChage}
          >
            <option value={' '} disabled>
              --Pick a Car Brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label htmlFor="isChecked">
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChage}
          />
          Is Checked?
        </label>
        <label htmlFor="gender">
          {' '}
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={state.gender === 'Male'}
            onChange={handleChage}
          />
          {' '}
          Male
        </label>
        <label htmlFor="gender">
          {' '}
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={state.gender === 'Female'}
            onChange={handleChage}
          />
          {' '}
          Female
        </label>
        <label htmlFor="price">
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChage}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h5>
        Name:
        {' '}
        {state.fname }
        {' '}
        { state.lname}
      </h5>
      <p>
        Message:
        {' '}
        {state.message}
      </p>
      <h5>
        Favorite car Brand:
        {' '}
        {state.carBrand}
        {' '}
      </h5>
      <h5>
        Is it checked:
        {' '}
        {state.isChecked ? 'Yes' : 'No'}
      </h5>
      <h5>
        Gender :
        {' '}
        {state.gender}
      </h5>
      <h5>
        Price :
        $
        {state.price}
      </h5>
    </div>
  );
};

export default Form;
