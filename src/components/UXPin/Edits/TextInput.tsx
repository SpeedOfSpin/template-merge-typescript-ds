import React from 'react';
import { TextInput as TextInputM, IInputBaseProps } from '../../Edits/TextInput';

export default function TextInput(props: IInputBaseProps) {
  return <TextInputM {...props}>{props.children}</TextInputM>;
}
