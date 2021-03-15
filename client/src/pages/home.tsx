import React from 'react';
import { HeaderSection, KeyFeaturesSection, KeyFeaturesArticle } from './home.styles.js';

export default function Home(): JSX.Element {
  return (
    <>
      <HeaderSection>
        <h1>UK Property API</h1>
        <p>
          Access details for almost half a million properties currently listed for
          sale on the UK property market
        </p>
      </HeaderSection>

      <KeyFeaturesArticle>
        <KeyFeaturesSection>
          <h3>140</h3>
          <p>
            cities/towns across england, scotland, wales and northern island
          </p>
          <h3>10</h3>
          <p>
            query parameters, allowing for highly targeted searches
          </p>
          <h3>{"< >"}</h3>
          <p>
            open source code base, allowing for customisations and improvements
          </p>
        </KeyFeaturesSection>
      </KeyFeaturesArticle>
    </>
  );
}
