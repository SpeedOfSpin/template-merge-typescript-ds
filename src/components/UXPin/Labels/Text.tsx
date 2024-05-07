import React from 'react';
import { Text as TextM, TextProps } from '../../Labels/Text';

export default function Text(props: TextProps) {
  return <TextM {...props}>{props.children}</TextM>;
}
