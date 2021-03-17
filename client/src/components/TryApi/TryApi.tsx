import React, { useState } from 'react';
import Bedrooms from './Bedrooms';
import { PropertyAttributes } from './interfaces';
import Location from './Location'
import Price from './Price';
import PropertyType from './PropertyType';
import { TryApiForm } from './TryApi.styles';

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
      <Price propertyAttributes={propertyAttributes} handleFormUpdates={handleFormUpdates} />
      <Bedrooms propertyAttributes={propertyAttributes} handleFormUpdates={handleFormUpdates} />
      <PropertyType propertyAttributes={propertyAttributes} handleFormUpdates={handleFormUpdates} />
    </TryApiForm>
  );
}
