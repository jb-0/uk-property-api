import React from 'react';
import { PriceSection } from './TryApi.styles';
import { FormComponentProps } from './interfaces';

export default function Price({
  propertyAttributes,
  handleFormUpdates,
}: FormComponentProps): JSX.Element {
  return (
    <PriceSection>
      <label>Min Price (£)</label>
      <input
        type='number'
        id='low'
        name='low'
        value={propertyAttributes.low}
        onChange={handleFormUpdates}
      />

      <label>Max Price (£)</label>
      <input
        type='number'
        id='high'
        name='high'
        value={propertyAttributes.high}
        onChange={handleFormUpdates}
      />
    </PriceSection>
  );
}
