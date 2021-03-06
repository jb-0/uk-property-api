import React from 'react';
import { PropertyTypeSection } from './TryApi.styles';
import { PropertyAttributes } from './interfaces';
import { FormComponentProps } from './interfaces';

export default function PropertyType({
  propertyAttributes,
  handleFormUpdates,
}: FormComponentProps): JSX.Element {
  return (
    <PropertyTypeSection>
      {Object.keys(propertyAttributes).map((key, idx) => {
        const checkedState =
          propertyAttributes[key as keyof PropertyAttributes];
        if (typeof checkedState === 'boolean') {
          return (
            <div key={idx}>
              <label>{key}</label>
              <input
                value={key}
                id={key}
                name={key}
                type='checkbox'
                defaultChecked={checkedState}
                onChange={handleFormUpdates}
              />
            </div>
          );
        }
      })}
    </PropertyTypeSection>
  );
}
