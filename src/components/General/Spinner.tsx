import React from "react";

export const Spinner: React.FC = () => {
    return (
        <svg style={{ margin: "auto", display: "block", width: "25px" }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="80" cy="50" r="5" fill="#1386c4">
                <animate attributeName="cx" values="80;50" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="50;80" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#1386c4;#f3c232" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="50" cy="80" r="5" fill="#f3c232">
                <animate attributeName="cx" values="50;20" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="80;50.00000000000001" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#f3c232;#000000" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="20" cy="50.00000000000001" r="5" fill="#000000">
                <animate attributeName="cx" values="20;49.99999999999999" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="50.00000000000001;20" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#000000;#47993d" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="49.99999999999999" cy="20" r="5" fill="#47993d">
                <animate attributeName="cx" values="49.99999999999999;80" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="20;49.99999999999999" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#47993d;#1386c4" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            </circle>
        </svg>
    );
};
