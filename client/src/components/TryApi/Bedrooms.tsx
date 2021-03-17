import React from 'react';
import { BedroomsSection } from './TryApi.styles';
import { FormComponentProps } from './interfaces';

export default function Bedrooms({
  propertyAttributes,
  handleFormUpdates,
}: FormComponentProps): JSX.Element {
  return (
    <BedroomsSection>
      <div>
        <label>Min Beds</label>
        <input
          type='number'
          id='minbeds'
          name='minbeds'
          value={propertyAttributes.minbeds}
          onChange={handleFormUpdates}
        />
      </div>
      
      <div>
        <label>Max Beds</label>
        <input
          type='number'
          id='maxbeds'
          name='maxbeds'
          value={propertyAttributes.maxbeds}
          onChange={handleFormUpdates}
        />
      </div>
    </BedroomsSection>
  );
}
