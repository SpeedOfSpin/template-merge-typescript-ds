import React from 'react';
import { H1 as H1M } from '../../Labels/Headers';
import { TextProps } from 'react-aria-components';

export default function H1(props: TextProps) {
  return <H1M {...props}>{props.children}</H1M>;
}
