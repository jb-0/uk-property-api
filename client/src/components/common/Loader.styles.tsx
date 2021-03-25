import styled from 'styled-components';
import { LoaderCircleProps } from './interfaces';

export const LoaderCircle = styled.div`
  @keyframes fadeInAndOut {
    50%  {opacity: 100%;}
    100% {opacity: 0%;}
  }

  opacity: 0%;
  background-color: var(--secondary-color);
  border-radius: 10px;
  height: 2px;
  width: 2px;
  animation: fadeInAndOut 2s infinite;
  animation-delay: ${(props : LoaderCircleProps) => `${props.animationDelay}s`};
  margin: 2px;
`;

export const LoaderCirclesSection = styled.section`
  display: inline-block;
`; 