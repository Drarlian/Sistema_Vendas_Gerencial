import styled from "styled-components";

export const DivHeader = styled.div`
    background-color: orange;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    position: sticky;  // Gruda a barra em cima mesmo com o scroll.
    top: 0;

    padding-right: 5px;
    padding-left: 5px;

    height: 60px;


    z-index: 99;

    .area-esquerda{
        display: flex;

        .sideBarButton{
            background: transparent;
    
            font-size: 1.5em;
            border-style: none;
    
            cursor: pointer;
        }
    }


    .infos-usuario{
        /* background-color: red; */
        
        display: flex;
        /* align-items: center; */
        gap: 3px;

        height: 60px;


        .div-name-role{
            /* background-color: blue; */

            height: 60px;

            display: flex;
            flex-direction: column;

            justify-content: center;
            /* align-items: start; */

            h1, h2, h3, h4, h5, h6, p {
                margin-top: 0;
                margin-bottom: 0;
            }

            h3 {
                font-size: 1em;
                font-weight: 400;
            }
            h4 {
                font-size: 0.9em;
                font-weight: 500;
                text-align: right;
            }
        }

        .div-imagem-usuario{
            /* background-color: green; */

            display: flex;
            align-items: center;
            height: 60px;
            position: relative;

            img{
                /* background-color: pink; */

                height: 50%;
                width: 32px;
                
                border-radius: 50%;
                border: solid green 2.5px;
            }
        }
    }
`;