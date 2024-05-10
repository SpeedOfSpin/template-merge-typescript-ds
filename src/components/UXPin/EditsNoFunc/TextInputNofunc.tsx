import React from 'react';
import { TextInputNoFunc as TextInputM, IInputBaseProps } from '../../Edits/TextInputNoFunc';

export default function TextInputNoFunc(props: IInputBaseProps) {
  return <TextInputM {...props}>{props.children}</TextInputM>;
}
