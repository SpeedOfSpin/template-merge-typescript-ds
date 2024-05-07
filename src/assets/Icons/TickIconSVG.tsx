import * as React from "react";
import { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}
export const TickIcon = (props: Props) => (
    <svg width={16} height={16} {...props}>
        <g data-name="Group 7600">
            <g data-name="Group 5156" transform="translate(-349 -137)">
                <circle data-name="Ellipse 194" cx={8} cy={8} r={8} transform="translate(349 137)" fill="#23a73d" />
            </g>
            <path
                data-name="Union 46"
                d="m6.385 11.867-3.258-3.4A.465.465 0 0 1 3 8.145a.458.458 0 0 1 .127-.322l.918-.961a.425.425 0 0 1 .621 0l2.029 2.113 4.637-4.84a.435.435 0 0 1 .311-.133.423.423 0 0 1 .311.137l.918.965a.467.467 0 0 1 0 .645L7.009 11.87a.432.432 0 0 1-.623 0Z"
                fill={props.color || "fff"}
            />
        </g>
    </svg>
);
