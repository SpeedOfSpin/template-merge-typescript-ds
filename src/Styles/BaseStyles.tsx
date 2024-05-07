import styled, { keyframes } from 'styled-components';
import { Box } from '../components/Box/Box';
export const StaticBGImg = styled.img`
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
  z-index: -1;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: 1024px) {
    /* Specific to this particular image */
    left: 50%;
    margin-left: -512px; /* 50% */
  }
`;

export const LinkBox = styled(Box)`
  padding: 5px;
  color: black;
  cursor: pointer;
  a {
    color: black;
  }
`;

export const BounceAnimation = keyframes`
	0% { margin-bottom: 0; }
	50% { margin-bottom: 15px }
	100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Dot = styled.div<any>`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
