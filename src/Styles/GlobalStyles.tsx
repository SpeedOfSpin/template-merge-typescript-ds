import { css, createGlobalStyle } from "styled-components";
import { theme } from "./AppTheme";

const scrollbar_backgroundcolor = theme.palette.secondary.c_300;
const scrollbar_backgroundbordercolor = "#DCDCDC";
export const GlobalStyles = createGlobalStyle`
    html,
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: white !important;
        height: 100%;
        ${theme.defaultStyle};
    }

    #root {
        height: 100%;
        width: 100%;

        // Set the first child div up like this.
        // Any child container divs should use NonScrollableContainer up to the
        // point where a vertical overflow is required.
        > div {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    /////////////////////////////////////////
    //Custom scroll bar
    * {
        scrollbar-width: thin;
        scrollbar-color: ${scrollbar_backgroundcolor} ${scrollbar_backgroundbordercolor};
    }

    // Chrome, Edge, and Safari - more overrides available, including radius, width and thumb borders.
    *::-webkit-scrollbar {
        height: 9px;
        width: 9px;
    }

    *::-webkit-scrollbar-track {
        background: ${scrollbar_backgroundbordercolor};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${scrollbar_backgroundcolor};
        border-radius: 9px;
        border: 1px solid ${scrollbar_backgroundbordercolor};
    }
    //End of custom scroll bar
    /////////////////////////////////////////

    /////////////////////////////////////////
    //Remove blue background from inputs
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    /////////////////////////////////////////
`;

/*export const GlobalStyles = () => {


    return (
        <Global
            styles={css`
                html,
                body {
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    background-color: white !important;
                    height: 100%;
                    ${theme.defaultStyle};
                }
                #root {
                    height: 100%;
                    width: 100%;
                }
                code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
                }

                /////////////////////////////////////////
                //Custom scroll bar
                * {
                    scrollbar-width: thin;
                    scrollbar-color: ${scrollbar_backgroundcolor} ${scrollbar_backgroundbordercolor};
                }

                // Chrome, Edge, and Safari - more overrides available, including radius, width and thumb borders.
                *::-webkit-scrollbar {
                    height: 9px;
                    width: 9px;
                }

                *::-webkit-scrollbar-track {
                    background: ${scrollbar_backgroundbordercolor};
                }

                *::-webkit-scrollbar-thumb {
                    background-color: ${scrollbar_backgroundcolor};
                    border-radius: 9px;
                    border: 1px solid ${scrollbar_backgroundbordercolor};
                }
                //End of custom scroll bar
                /////////////////////////////////////////

                /////////////////////////////////////////
                //Remove blue background from inputs
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 30px white inset !important;
                }
                /////////////////////////////////////////
            `}
        />
    );
};*/
