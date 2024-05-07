import * as React from "react";
import { SVGProps } from "react";

type Props = {
    color?: string;
} & SVGProps<SVGSVGElement>;

export const DeleteIcon = (props: Props) => (
    <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
        <g data-name="Group 5134" fill={props.color || "black"}>
            <g data-name="Rectangle 1579" stroke="#575756" strokeLinejoin="round">
                <path stroke="none" d="M0 2h14v3H0z" />
                <path fill="none" d="M.5 2.5h13v2H.5z" />
            </g>
            <path
                data-name="Union 41"
                d="M1.857 6h10.285a.842.842 0 0 1 .666.33.906.906 0 0 1 .172.744l-1.285 6.223a.864.864 0 0 1-.838.7H3.142a.864.864 0 0 1-.838-.7L1.019 7.074a.906.906 0 0 1 .172-.744.842.842 0 0 1 .666-.33Z"
            />
            <g data-name="Rectangle 1580" stroke="#575756" strokeLinejoin="round">
                <path stroke="none" d="M4 0h6v3H4z" />
                <path fill="none" d="M4.5.5h5v2h-5z" />
            </g>
        </g>
    </svg>
);
