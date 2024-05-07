import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

interface CopyButtonProps {
    text: string;
    height?: number;
    style?: React.CSSProperties;
}

export const CopyToClipboardButton: React.FC<CopyButtonProps> = ({ text, height, style }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        console.log("handleCopy called");
        navigator.clipboard.writeText(text);
        console.log("text copied: ", text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };
    return (
        <div style={style}>
            <div onClick={handleCopy}>
                <FaCopy />
            </div>
        </div>
    );
};
