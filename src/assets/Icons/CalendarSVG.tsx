import * as React from "react";
import { SVGProps } from "react";

export const CalendarSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
        <g data-name="Group 10" fill="none" stroke="#2b2c2c">
            <g data-name="Rectangle 10" transform="translate(0 1)">
                <rect width={18} height={17} rx={2} stroke="none" />
                <rect x={0.5} y={0.5} width={17} height={16} rx={1.5} />
            </g>
            <g data-name="Rectangle 11">
                <path stroke="none" d="M3 0h2v2H3z" />
                <path d="M3.5.5h1v1h-1z" />
            </g>
            <g data-name="Rectangle 14">
                <path stroke="none" d="M13 0h2v2h-2z" />
                <path d="M13.5.5h1v1h-1z" />
            </g>
            <g data-name="Rectangle 15" transform="translate(13 8)">
                <rect width={2} height={2} rx={1} stroke="none" />
                <rect x={0.5} y={0.5} width={1} height={1} rx={0.5} />
            </g>
            <g data-name="Rectangle 16" transform="translate(9 8)">
                <rect width={2} height={2} rx={1} stroke="none" />
                <rect x={0.5} y={0.5} width={1} height={1} rx={0.5} />
            </g>
            <g data-name="Rectangle 17" transform="translate(7 11)">
                <rect width={2} height={2} rx={1} stroke="none" />
                <rect x={0.5} y={0.5} width={1} height={1} rx={0.5} />
            </g>
            <g data-name="Rectangle 18" transform="translate(4 11)">
                <rect width={2} height={2} rx={1} stroke="none" />
                <rect x={0.5} y={0.5} width={1} height={1} rx={0.5} />
            </g>
            <g data-name="Rectangle 12">
                <path stroke="none" d="M3 4h12v2H3z" />
                <path d="M3.5 4.5h11v1h-11z" />
            </g>
            <g data-name="Rectangle 13">
                <path stroke="none" d="M3 4h12v2H3z" />
                <path d="M3.5 4.5h11v1h-11z" />
            </g>
        </g>
    </svg>
);
