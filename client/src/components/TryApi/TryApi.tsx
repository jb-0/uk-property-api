import React, { useState } from 'react';
import { PropertyAttributes } from './interfaces'
import Location from './Location'
import {
  TryApiForm,
  LocationSection,
  PriceSection,
  BedroomsSection,
  PropertyTypeSection,
} from './TryApi.styles';

export default function TryApi(): JSX.Element {
  const [propertyAttributes, setPropertyAttributes] = useState(new PropertyAttributes());

  function handleFormUpdates(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    // Get the object key so we know which element needs updating
    const targetPropertyType: string = event.target.id;

    // For boolean cases just use not to switch the value
    if (
      typeof propertyAttributes[
        targetPropertyType as keyof PropertyAttributes
      ] === 'boolean'
    ) {
      setPropertyAttributes((prevValues) => {
        return {
          ...prevValues,
          [targetPropertyType]: !propertyAttributes[
            targetPropertyType as keyof PropertyAttributes
          ],
        };
      });
    } 
    // For all non-boolean (number and string) cases, simply set the value
    else {
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
      <Location propertyAttributes={propertyAttributes} handleFormUpdates={handleFormUpdates} />

      {/* <PriceSection>
        <p>Min Price (£)</p>
        <input
          type='number'
          id='low'
          name='low'
          value={propertyAttributes.low}
          onChange={handleFormUpdates}
        />

        <p>Max Price (£)</p>
        <input
          type='number'
          id='high'
          name='high'
          value={propertyAttributes.high}
          onChange={handleFormUpdates}
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
          const checkedState =
            propertyAttributes[key as keyof PropertyAttributes];
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
      </PropertyTypeSection> */}
    </TryApiForm>
  );
}
