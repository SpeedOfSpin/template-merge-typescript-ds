import * as React from "react";
import { SVGProps } from "react";

export const EditSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={10.899} height={11} {...props}>
        <g data-name="Group 7151" fill="none">
            <g data-name="Path 5674">
                <path d="M10 10v1H0v-1Z" />
                <path d="M0 10h10v1H0v-1Z" fill="#fff" />
            </g>
            <g data-name="Rectangle 1922" stroke="#fff">
                <path d="M10.191.707a1 1 0 0 1 0 1.414L4.534 7.778 3.12 6.364 8.777.707a1 1 0 0 1 1.414 0Z" stroke="none" />
                <path d="M9.838 1.06a.5.5 0 0 1 0 .708L4.652 6.953a.167.167 0 0 1-.236 0l-.47-.471a.167.167 0 0 1 0-.236L9.13 1.06a.5.5 0 0 1 .708 0Z" />
            </g>
            <g data-name="Polygon 33">
                <path d="m1.707 9.19.707-2.12 1.414 1.414Z" />
                <path d="m1.707 9.19.707-2.12 1.414 1.414-2.121.707Z" fill="#fff" />
            </g>
        </g>
    </svg>
);
