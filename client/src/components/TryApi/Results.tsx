import React from 'react'
import { ResultsProps } from './interfaces';
import { ResultsSection } from './TryApi.styles';

export default function Results({ propertyData }: ResultsProps): JSX.Element {
  if (!propertyData) return <></>
  return (
    <>
      <p>Results</p>
      <ResultsSection>
        {JSON.stringify(propertyData)}
      </ResultsSection>
    </>
  )
}
