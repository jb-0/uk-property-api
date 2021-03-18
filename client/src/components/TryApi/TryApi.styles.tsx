import styled from 'styled-components';

export const TryApiForm = styled.form`
  max-width: 800px;
  margin: auto;

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