import React from 'react';
import { HeaderSection } from './home.styles.js';

export default function Home(): JSX.Element {
  return (
    <HeaderSection>
      <h1>UK Property API</h1>
      <p>
        Access details for almost half a million properties currently listed for
        sale on the UK property market
      </p>
    </HeaderSection>
  );
}
