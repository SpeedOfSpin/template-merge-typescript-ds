import * as React from "react";
import { SVGProps } from "react";

export const AddSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
        <g data-name="Group 7152" fill="none" stroke="#fff">
            <g data-name="Rectangle 1921">
                <rect width={10} height={10} rx={1} stroke="none" />
                <rect x={0.5} y={0.5} width={9} height={9} rx={0.5} />
            </g>
            <path data-name="Line 77" strokeLinecap="round" d="M5 2.5v5" />
            <path data-name="Line 78" strokeLinecap="round" d="M7.5 5h-5" />
        </g>
    </svg>
);
