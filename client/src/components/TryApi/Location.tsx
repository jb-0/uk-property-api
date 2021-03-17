import React from 'react';
import { LocationSection } from './TryApi.styles';
import { FormComponentProps } from './interfaces';

export default function Location({
  propertyAttributes,
  handleFormUpdates,
}: FormComponentProps): JSX.Element {
  return (
    <LocationSection>
      <label>Location</label>
      <select
        name='location'
        id='location'
        value={propertyAttributes.location}
        onChange={handleFormUpdates}
      >
        <option value='islington'>Islington</option>
        <option value='berkhamsted'>Berkhamsted</option>
        <option value='edinburgh'>Edinburgh</option>
      </select>

      <label>Radius (miles)</label>
      <input
        id='radius'
        type='range'
        min='1'
        max='40'
        value={propertyAttributes.radius}
        onChange={handleFormUpdates}
      />
      <output>{propertyAttributes.radius}</output>
    </LocationSection>
  );
}
