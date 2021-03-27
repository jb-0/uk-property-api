import styled from 'styled-components';

export const TryApiForm = styled.form`
  max-width: 800px;
  margin: auto;
  padding-bottom: 50px;

  & label {
    padding-right: 10px;
  }

  & div {
    padding: 10px;
  }

  & section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
  }
`;

export const SubmitButton = styled.input`
  font-family: inherit;
  margin: 10px 0;
`;

export const LocationSection = styled.section``;

export const PriceSection = styled.section``;

export const BedroomsSection = styled.section``;

export const PropertyTypeSection = styled.section``;

export const ResultsSection = styled.section `
  background-color: var(--secondary-color);
  border: solid 2px var(--tertiary-color);
  color: var(--tertiary-color);
  margin: 0 15px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
  text-align: left;
  padding: 10px;
`;