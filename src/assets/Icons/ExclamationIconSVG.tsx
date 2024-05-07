import * as React from 'react';
import { forwardRef, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  backgroundcolor?: string;
}

export const ExclamationIconSVG = forwardRef((props: Props, ref: any) => (
  <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g data-name="Group 5166" transform="translate(-349 -137)">
      <circle
        data-name="Ellipse 194"
        cx={8}
        cy={8}
        r={8}
        transform="translate(349 137)"
        fill={props.backgroundcolor || 'white'}
      />
      <path
        data-name="Path 5705"
        d="m357.73 140.242-.154 7h-1.064l-.154-7Zm-.63 9.842a.838.838 0 0 1-.616-.252.838.838 0 0 1-.252-.616.838.838 0 0 1 .252-.616.838.838 0 0 1 .616-.252.8.8 0 0 1 .6.252.85.85 0 0 1 .245.616.85.85 0 0 1-.245.616.8.8 0 0 1-.6.252Z"
        fill={props.color || 'black'}
      />
    </g>
  </svg>
));
ExclamationIconSVG.displayName = 'ExclamationIconSVG';
