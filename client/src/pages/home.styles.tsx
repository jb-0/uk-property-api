import styled from 'styled-components';

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 400px;
  max-width: 800px;
  margin: auto;
`;

export const KeyFeaturesArticle = styled.article`
  width: 100%;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
`;

export const KeyFeaturesSection = styled.section`
  max-width: 800px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & h1 {
    flex-basis: 20%;
  }
  
  & p {
    flex-basis: 80%;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
