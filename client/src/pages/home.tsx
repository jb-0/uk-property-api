import React from 'react';
import TryApi from '../components/TryApi/TryApi';
import { HeaderSection, KeyFeaturesSection, KeyFeaturesArticle } from './home.styles';

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
          <h1>140</h1>
          <p>
            cities/towns across england, scotland, wales and northern ireland
          </p>
          <h1>10</h1>
          <p>
            query parameters, allowing for highly targeted searches
          </p>
          <h1>{"< >"}</h1>
          <p>
            open source code base, allowing for customisations and improvements
          </p>
        </KeyFeaturesSection>
      </KeyFeaturesArticle>
      <TryApi />
    </>
  );
}
