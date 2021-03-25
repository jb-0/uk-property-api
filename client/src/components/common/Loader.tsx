import React from 'react';
import { LoaderCirclesSection, LoaderCircle } from './Loader.styles';

export default function Loader(): JSX.Element  {
  return (
    <LoaderCirclesSection>
      <LoaderCircle animationDelay={0}/>
      <LoaderCircle animationDelay={0.5}/>
      <LoaderCircle animationDelay={1}/>
    </LoaderCirclesSection>
  )
}
