import React, { useState, useEffect } from 'react';
import Bedrooms from './Bedrooms';
import { PropertyAttributes } from './interfaces';
import Location from './Location';
import Price from './Price';
import PropertyType from './PropertyType';
import { TryApiForm, SubmitButton } from './TryApi.styles';

export default function TryApi(): JSX.Element {
  const [propertyAttributes, setPropertyAttributes] = useState(
    new PropertyAttributes()
  );
  const [submittedForm, setSubmittedForm] = useState(false);
  const [propertyData, setPropertyData] = useState();

  function handleFormUpdates(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    // Get the object key so we know which element needs updating
    const targetPropertyType: string = e.target.id;

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
          [targetPropertyType]: e.target.value,
        };
      });
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedForm(true);
  }

  useEffect(() => {
    async function callPropertyAPI() {
      const query = Object.keys(propertyAttributes)
        .map(
          (key) =>
            `${key}=${propertyAttributes[key as keyof PropertyAttributes]}`
        )
        .join('&');
      
      const response = await fetch(`http://localhost:8080/properties?${query}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      setPropertyData(await response.json());
    }

    if (submittedForm) {
      callPropertyAPI();
      setSubmittedForm(false);
    }
  });

  return (
    <TryApiForm onSubmit={handleFormSubmit}>
      <h1>Try it out</h1>
      <p>
        Fill out the form below and click submit to try out the UK Property API
      </p>
      <Location
        propertyAttributes={propertyAttributes}
        handleFormUpdates={handleFormUpdates}
      />
      <Price
        propertyAttributes={propertyAttributes}
        handleFormUpdates={handleFormUpdates}
      />
      <Bedrooms
        propertyAttributes={propertyAttributes}
        handleFormUpdates={handleFormUpdates}
      />
      <PropertyType
        propertyAttributes={propertyAttributes}
        handleFormUpdates={handleFormUpdates}
      />

      <SubmitButton type='submit' />
    </TryApiForm>
  );
}
