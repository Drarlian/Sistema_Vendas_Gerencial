import styled from "styled-components";

export const DivSideBar = styled.div<{status: boolean}>`
    background-color: gray;

    width: ${(props) => props.status ? '200px': '0px'};

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

    .top-sideBar{
        display: flex;
        justify-content: center;

        white-space: nowrap; // Impede que na hora de fechar o conteúdo fique zoado.
    }

    .main-sideBar{
        /* background-color: purple; */

        display: flex;
        flex-direction: column;
        flex: 1;
        /* gap: 1rem; */

        white-space: nowrap; // Impede que na hora de fechar o conteúdo fique zoado.

        a{
            /* background-color: white; */

            display: flex;
            align-items: center;
            
            /* border: solid; */
            padding: 10px 5px;
            gap: 1rem;
            font-size: 1.1em;

            color: black;
            text-decoration: none;

            transition: all ease 0.5s;

            &:hover{
                background-color: rgba(0, 0, 0, 0.5);
                color: blue;
            }
        }
    }

    .bottom-sideBar{
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        white-space: nowrap; // Impede que na hora de fechar o conteúdo fique zoado.

        button{
            background-color: gray;

            display: flex;
            justify-content: center;
            align-items: center;
            
            padding-bottom: 5px;

            font-size: 1.2em;

            cursor: pointer;

            border-style: none;

            transition: all ease 0.5s;

            &:hover{
                opacity: 73%;
            }
        }
    }
    
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