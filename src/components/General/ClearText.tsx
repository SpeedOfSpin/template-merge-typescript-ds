import { Box } from '../Box//Box';
import React from 'react';
import styled from 'styled-components';

const StyledClearText = styled(Box)`
  /*align-self: flex-start;*/ //EN: Probably need this for text areas
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  //background: #555;
  color: black;
  border: none;
  border-radius: 1.143rem;
  width: 1.143rem;
  height: 1.143rem;
  padding: 0;
  margin-top: 2px;
  font-size: 0.857rem;
  &:before {
    content: '\\2715';
  }
  &:hover {
    background-color: #d7d7d7;
  }
`;
interface Props {
  onClick?: () => void;
  className?: string;
}
export const ClearText: React.FC<Props> = (props: Props) => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return <StyledClearText className={props.className} onClick={() => onClick()} />;
};
