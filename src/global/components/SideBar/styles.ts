import styled from "styled-components";

export const DivSideBar = styled.div<{status: boolean}>`
    background-color: red;

    width: ${(props) => props.status ? '350px': '0px'};

    display: flex;
    flex-direction: column;

    // Prendendo a barra do lado esquerdo da tela
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;

    // Impedindo que qualquer conteúdo que passe do width dela apareça.
    overflow: hidden;

    transition: all ease 0.5s;

    z-index: 999;
`;

export const DivShadow = styled.div<{status: boolean}>`
    background-color: rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: ${props => props.status ? 'inline': 'none'};
    /* opacity: ${props => props.status ? '1': '0'}; */

    z-index: 9;
`;