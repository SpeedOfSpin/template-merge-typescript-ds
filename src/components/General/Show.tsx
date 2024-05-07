import React, { PropsWithChildren } from 'react';
interface ElseProps {
  if?: boolean;
  renderToDom?: boolean;
}
export const Else: React.FC<PropsWithChildren<ElseProps>> = (props: PropsWithChildren<ElseProps>) => {
  return <>{props.children}</>;
};
interface ShowProps {
  if: boolean | undefined | null;
  renderToDom?: boolean;
}
export const Show: React.FC<PropsWithChildren<ShowProps>> = (props: PropsWithChildren<ShowProps>) => {
  const getElse = () => {
    if (Array.isArray(props.children)) {
      return React.Children.map(props.children, (element: any) => {
        if (element.type === Else) {
          return element;
        }
      });
    }
    return null;
  };

  const getChildren = () => {
    const elements: any[] = React.Children.toArray(props.children).filter((element: any) => {
      return element.type !== Else;
    });
    if (elements.length === 1) {
      return elements[0];
    } else if (elements.length > 1) {
      return <>{elements}</>;
    }
    return elements;
  };

  if (props.if) {
    if (Array.isArray(props.children)) {
      return getChildren();
    }
    return props.children;
  }
  if (!props.if) {
    return getElse();
  }
  return null;
};
Show.defaultProps = {
  if: false,
  renderToDom: false,
};
