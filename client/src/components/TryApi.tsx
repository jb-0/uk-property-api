import React, { ChangeEvent, useState } from 'react';
import {
  TryApiForm,
  LocationSection,
  PriceSection,
  BedroomsSection,
  PropertyTypeSection,
} from './TryApi.styles';

class PropertyAttributes {
  Detached = true;
  Semi = true;
  Terraced = true;
  Flat = true;
  low = 50000;
  high = 500000;
  minbeds = 1;
  maxbeds = 4;
  radius = 2;
}

export default function TryApi(): JSX.Element {
  const [propertyAttributes, setPropertyAttributes] = useState(new PropertyAttributes());

  function handleFormUpdates(event: React.ChangeEvent<HTMLInputElement>) {
    const targetPropertyType: string = event.target.id;
    console.log(event);
    

    if (typeof propertyAttributes[targetPropertyType as keyof PropertyAttributes] === 'boolean') {
      setPropertyAttributes((prevValues) => {
        return {
          ...prevValues,
          [targetPropertyType]: !propertyAttributes[
            targetPropertyType as keyof PropertyAttributes
          ],
        };
      });
    } else {
      setPropertyAttributes((prevValues) => {
        return {
          ...prevValues,
          [targetPropertyType]: event.target.value,
        };
      });
    }
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
      */}

      <PriceSection>
        <p>Min Price (£)</p>
        <input
          type='number'
          id='low'
          name='low'
          value={propertyAttributes.low}
        />

        <p>Max Price (£)</p>
        <input
          type='number'
          id='high'
          name='high'
          value={propertyAttributes.high}
        />
      </PriceSection>

      <BedroomsSection>
        <p>Min Beds</p>
        <input
          type='number'
          id='minbeds'
          name='minbeds'
          value={propertyAttributes.minbeds}
          onChange={handleFormUpdates}
        />

        <p>Max Beds</p>
        <input
          type='number'
          id='maxbeds'
          name='maxbeds'
          value={propertyAttributes.maxbeds}
          onChange={handleFormUpdates}
        />
      </BedroomsSection>

      <PropertyTypeSection>
        {Object.keys(propertyAttributes).map((key, idx) => {
          const checkedState = propertyAttributes[key as keyof PropertyAttributes];
          if (typeof checkedState === 'boolean') {
            return (
              <input
                key={idx}
                value={key}
                id={key}
                name={key}
                type='checkbox'
                defaultChecked={checkedState}
                onChange={handleFormUpdates}
              />  
            );
          }
        })}
      </PropertyTypeSection>
    </TryApiForm>
  );
}
