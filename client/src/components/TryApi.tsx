import React, { ChangeEvent, useState } from 'react';
import {
  TryApiForm,
  LocationSection,
  PriceSection,
  BedroomsSection,
  PropertyTypeSection,
} from './TryApi.styles';

class PropertyType {
  Detached = true;
  Semi = true;
  Terraced = true;
  Flat = true;
}

export default function TryApi(): JSX.Element {
  const [propertyType, setPropertyType] = useState(new PropertyType());

  function handlePropertyTypeCheck(event: ChangeEvent) {
    const targetPropertyType: string = event.target.id;

    setPropertyType((prevValues) => {
      return {
        ...prevValues,
        [targetPropertyType]: !propertyType[
          targetPropertyType as keyof PropertyType
        ],
      };
    });
  }

  return (
    <TryApiForm>
      {/* <label>Location</label>
      <select name='location' id='location'>
        <option value='islington'>Islington</option>
        <option value='berkhamsted'>Berkhamsted</option>
        <option value='edinburgh'>Edinburgh</option>
      </select>

      <p className='form-label' id='radius-label'>
        Radius (miles)
      </p>
      <input
        className='form-input'
        id='radius'
        type='range'
        min='1'
        max='40'
        value='2'
        onchange='radiusvalue.value=value'
      />
      <output id='radiusvalue'>2</output>

      <p className='form-label'>Min Price (£)</p>
      <input className='form-input' type='number' id='low' name='low' />

      <p className='form-label'>Max Price (£)</p>
      <input
        className='form-input'
        type='number'
        id='high'
        name='high'
        value='150000'
      />

      <p className='form-label'>Min Beds</p>
      <input className='form-input' type='number' id='minbeds' name='minbeds' />

      <p className='form-label'>Max Beds</p>
      <input
        className='form-input'
        type='number'
        id='maxbeds'
        name='maxbeds'
        value='2'
      /> */}

      <PropertyTypeSection>
        {Object.keys(propertyType).map((key, idx) => {
          const checkedState = propertyType[key as keyof PropertyType];
          return (
            <input
              key={idx}
              value={key}
              id={key}
              name={key}
              type='checkbox'
              defaultChecked={checkedState}
              onChange={handlePropertyTypeCheck}
            />
          );
        })}
      </PropertyTypeSection>
    </TryApiForm>
  );
}
