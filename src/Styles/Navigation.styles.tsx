import styled from "styled-components";

import { theme } from "./AppTheme";

export const HeaderNavigation = styled.nav`
    background-color: white;
    border-bottom: 1px solid #d4d4d4;

    ul {
        height: 4.5rem;
        margin: 0 2rem;
        padding: 0;
        display: flex;
        list-style-type: none;

        li {
            display: flex;

            a {
                align-items: center;
                background-color: #f6f6f6;
                border-left: 1px solid white;
                border-right: 1px solid white;
                color: #3d0c23;
                font-weight: bold;
                font-size: 0.75rem;
                display: flex;
                justify-content: center;
                margin: 0rem;
                min-width: 9rem;
                text-decoration: none;
                text-transform: uppercase;

                &:not(first-child) {
                    margin-left: -1px;
                }

                &.active {
                    background-color: ${theme.palette.blue.c_500};
                    color: ${theme.palette.blue.text};
                }

                &:hover:not(.active) {
                    background-color: ${theme.palette.blue.c_600};
                    color: ${theme.palette.blue.text};
                }
            }
        }

        li.home {
            margin-right: auto;

            a {
                background-color: transparent;
                margin: 0.75rem 0;
                min-width: auto;
                //max-width: 4.5rem;

                img {
                    height: 100%;
                }

                &:hover:not(.active) {
                    background-color: transparent;
                    color: transparent;
                }
            }
        }
    }
`;

export const TabbedNavigation = styled.nav`
    background-color: #f6f6f6;
    border-bottom: 1px solid #d4d4d4;

    ul {
        height: 4rem;
        margin: 0 2rem;
        padding: 0;
        display: flex;
        list-style-type: none;

        li {
            display: flex;

            a {
                align-items: center;
                background-color: white;
                border-left: 1px solid #d4d4d4;
                border-top: 1px solid #d4d4d4;
                border-right: 1px solid #d4d4d4;
                color: #3d0c23;
                cursor: pointer;
                font-weight: bold;
                font-size: 0.625rem;
                display: flex;
                justify-content: center;
                margin: 2rem 0rem 0rem 0rem;
                min-width: 12rem;
                text-decoration: none;
                text-transform: uppercase;

                &:not(first-child) {
                    margin-left: -1px;
                }

                &.active {
                    margin-top: 1.5rem;
                    margin-bottom: -1px;
                }
            }
        }
    }
`;
