import React from 'react';
import { Button as ButtonM, ButtonProps } from '../../Button/Button';

export default function Button(props: ButtonProps) {
  return <ButtonM {...props}>{props.children}</ButtonM>;
}
