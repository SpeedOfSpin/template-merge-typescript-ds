import * as React from "react";
import { SVGProps } from "react";

export const CompanyLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={156.383} height={39.675} {...props}>
        <defs>
            <linearGradient id="a" x1={0.07} y1={0.386} x2={0.845} y2={0.895} gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="#3c3c3b" />
                <stop offset={1} stopColor="#dc3545" />
            </linearGradient>
        </defs>
        <g data-name="Group 5172">
            <path
                data-name="Path 1004"
                d="M9.074 27.8h11.913L18.623 32H6.746c-2.145 0-5.222-1.251-5.222-4.289V12.938h5.223v12.728c0 1.874 1.133 2.134 2.327 2.134Z"
                transform="translate(13.911 -2.455)"
                fill="url(#a)"
            />
            <path
                data-name="Ellipse 174"
                d="M19.837 5.454a14.384 14.384 0 1 0 14.384 14.383A14.4 14.4 0 0 0 19.837 5.454m0-5.454A19.837 19.837 0 1 1 0 19.837 19.837 19.837 0 0 1 19.837 0Z"
                fill="#dc3545"
            />
            <text
                data-name="company logo"
                transform="translate(45.384 24.235)"
                fill="#3c3c3b"
                fontSize={18}
                fontFamily="Roboto-Bold, Roboto"
                fontWeight={700}
                letterSpacing="-.015em"
            >
                <tspan x={0} y={0}>
                    {"company logo"}
                </tspan>
            </text>
        </g>
    </svg>
);
