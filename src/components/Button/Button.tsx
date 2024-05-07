import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { onClick, disabled, label } = props;

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
