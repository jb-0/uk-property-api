import React from 'react'
import { ResultsProps } from './interfaces';

export default function Results({ propertyData }: ResultsProps): JSX.Element {
  if (!propertyData) return <></>
  return (
    <div>
      <p>Results</p>
      {JSON.stringify(propertyData)}
    </div>
  )
}
